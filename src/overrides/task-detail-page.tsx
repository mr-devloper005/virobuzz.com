import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { ContentImage } from '@/components/shared/content-image'
import { Facebook, Linkedin, Share2, Twitter } from 'lucide-react'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

function imageFor(index: number) {
  const images = [
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=80',
  ]
  return images[index % images.length]
}

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const related = (await fetchTaskPosts('mediaDistribution', 8, { fresh: false })).filter((item) => item.slug !== slug).slice(0, 3)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const subtitle = typeof content.subtitle === 'string' ? content.subtitle : post.summary

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#1f2344]">
      <NavbarShell />
      <section className="bg-[linear-gradient(130deg,#363062_0%,#435585_100%)] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f5e8c7]">
            Press Release
          </div>
          <h1 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">{post.title}</h1>
          {subtitle ? <p className="mt-4 max-w-4xl text-base leading-8 text-[#d9def4]">{subtitle}</p> : null}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#dde3f7]">
            <span>{post.authorName || 'ViroBuzz Editorial Team'}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/updates">Latest News</Link>
            <span>/</span>
            <span className="truncate">{post.title}</span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <article className="rounded-3xl border border-[#818fb4]/25 bg-white p-6 shadow-[0_20px_60px_rgba(54,48,98,0.1)] sm:p-8">
          <div className="relative mb-7 h-72 overflow-hidden rounded-2xl sm:h-[430px]">
            <ContentImage src={imageFor(0)} alt={post.title} fill className="object-cover" />
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[#616a92]">
            <span className="rounded-full bg-[#eef1fa] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#394577]">
              {String((content.category as string) || 'General')}
            </span>
            <span>Published {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <div className="prose prose-lg max-w-none text-[#2f345d] prose-headings:text-[#1f2344] prose-p:leading-8">
            <RichContent html={html} />
          </div>

          <div className="mt-10 rounded-2xl border border-[#818fb4]/25 bg-[#f8f9ff] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f6a96]">Share this release</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { label: 'Share', icon: Share2 },
                { label: 'Twitter', icon: Twitter },
                { label: 'LinkedIn', icon: Linkedin },
                { label: 'Facebook', icon: Facebook },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-[#c4cde8] bg-white px-4 py-2 text-sm font-medium text-[#353f70] transition hover:bg-[#eef1fa]"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-[#e0e5f5] pt-8">
            <h2 className="text-2xl font-semibold text-[#22284f]">Related articles</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="overflow-hidden rounded-2xl border border-[#818fb4]/25 bg-white transition hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(54,48,98,0.12)]"
                >
                  <div className="relative h-40">
                    <ContentImage src={imageFor(index + 1)} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#6d78a2]">
                      {new Date(item.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                    <p className="mt-2 line-clamp-2 text-base font-semibold text-[#232952]">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
