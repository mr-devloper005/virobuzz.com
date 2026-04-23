'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import { ContentImage } from '@/components/shared/content-image'

type Props = {
  posts: SitePost[]
}

function categoryOf(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const value = typeof content.category === 'string' && content.category.trim() ? content.category.trim() : 'General'
  return value
}

function dateFilter(dateValue: string | undefined, range: string) {
  if (!dateValue) return range === 'all'
  if (range === 'all') return true
  const now = Date.now()
  const postTime = new Date(dateValue).getTime()
  if (!Number.isFinite(postTime)) return true
  const day = 1000 * 60 * 60 * 24
  if (range === '7d') return now - postTime <= 7 * day
  if (range === '30d') return now - postTime <= 30 * day
  if (range === '365d') return now - postTime <= 365 * day
  return true
}

function imageFor(index: number) {
  const images = [
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  ]
  return images[index % images.length]
}

export function MediaListingClient({ posts }: Props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateRange, setDateRange] = useState('all')
  const categories = useMemo(() => ['all', ...Array.from(new Set(posts.map((item) => categoryOf(item))))], [posts])

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        (post.summary || '').toLowerCase().includes(q) ||
        categoryOf(post).toLowerCase().includes(q)
      const matchCategory = category === 'all' || categoryOf(post) === category
      const matchDate = dateFilter(post.publishedAt, dateRange)
      return matchQuery && matchCategory && matchDate
    })
  }, [posts, query, category, dateRange])

  return (
    <>
      <section className="mb-8 rounded-3xl border border-[#818fb4]/30 bg-white p-5 shadow-[0_16px_44px_rgba(54,48,98,0.1)] sm:p-6">
        <div className="grid gap-3 md:grid-cols-[1fr_200px_200px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#69739d]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-12 w-full rounded-xl border border-[#c8cfe5] bg-[#f8f9ff] pl-10 pr-4 text-sm text-[#22284f] outline-none ring-[#435585]/30 focus:ring-2"
              placeholder="Search press releases..."
            />
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-12 rounded-xl border border-[#c8cfe5] bg-[#f8f9ff] px-3 text-sm text-[#22284f] outline-none ring-[#435585]/30 focus:ring-2"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === 'all' ? 'All categories' : item}
              </option>
            ))}
          </select>
          <select
            value={dateRange}
            onChange={(event) => setDateRange(event.target.value)}
            className="h-12 rounded-xl border border-[#c8cfe5] bg-[#f8f9ff] px-3 text-sm text-[#22284f] outline-none ring-[#435585]/30 focus:ring-2"
          >
            <option value="all">Any date</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="365d">Last 12 months</option>
          </select>
        </div>
      </section>

      {filtered.length ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <Link
              key={post.id}
              href={`/updates/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-[#818fb4]/25 bg-white shadow-[0_15px_40px_rgba(54,48,98,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(54,48,98,0.14)]"
            >
              <div className="relative h-48 overflow-hidden">
                <ContentImage src={imageFor(index)} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#eef1fa] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#404d81]">
                    {categoryOf(post)}
                  </span>
                  <span className="text-xs text-[#6c769c]">
                    {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="mt-3 line-clamp-2 text-xl font-semibold leading-snug text-[#242a52]">{post.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#60698f]">{post.summary || 'Read the complete press release details.'}</p>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#818fb4]/40 bg-white p-10 text-center text-sm text-[#66729e]">
          No press releases match your current filters.
        </div>
      )}
    </>
  )
}
