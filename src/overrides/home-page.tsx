import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe2, LineChart, Megaphone, Newspaper, Quote, ShieldCheck } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchTaskPosts } from '@/lib/task-data'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full press release for complete details.'
  return value.length > 140 ? value.slice(0, 137).trimEnd() + '...' : value
}

function heroImageFor(index: number) {
  const picks = [
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
  ]
  return picks[index % picks.length]
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 12, { fresh: false })
  const featured = posts[0]
  const topStories = posts.slice(1, 4)
  const latest = posts.slice(0, 6)
  const featureBlocks = [
    {
      icon: Megaphone,
      title: 'Turn your news into headlines',
      body: 'Distribute releases through a clean newsroom layout that prioritizes readability and trust.',
    },
    {
      icon: Globe2,
      title: 'Deliver your story with confidence',
      body: 'Structure your updates for multi-device discovery with consistent metadata and category tagging.',
    },
    {
      icon: LineChart,
      title: 'Measure impact quickly',
      body: 'Use post analytics and distribution insights to understand reach and newsroom performance.',
    },
  ]
  const testimonials = [
    {
      quote: 'ViroBuzz helped us publish product announcements with a clean newsroom look that journalists actually preferred.',
      author: 'Aarav Mehta',
      role: 'Head of Communications, NexaSoft',
    },
    {
      quote: 'The listing and article experience feels premium on mobile and desktop. Our updates now get more qualified views.',
      author: 'Sophia Turner',
      role: 'PR Manager, Orbit Finance',
    },
    {
      quote: 'Setup was fast, and the visual quality made our releases look like a dedicated media publication from day one.',
      author: 'Daniel Brooks',
      role: 'Founder, LaunchGrid',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#1e2140]">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(135deg,#363062_0%,#435585_55%,#5b6ea3_100%)] text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5e8c7]">
                  News Distribution Platform
                </p>
                <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  The News Starts Here
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#d4dbf2]">
                  Publish press releases, product updates, and company announcements through a clean, modern newsroom experience built for trust and clarity.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/updates" className="inline-flex items-center gap-2 rounded-full bg-[#f5e8c7] px-5 py-3 text-sm font-semibold text-[#363062] transition hover:bg-white">
                    Explore Latest News
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                    View Pricing
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {topStories.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/updates/${post.slug}`}
                    className={`${index === 0 ? 'sm:col-span-2' : ''} rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#f5e8c7]">
                      {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                    <h2 className="mt-2 line-clamp-2 text-xl font-semibold leading-snug">{post.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#d7def5]">{excerpt(post.summary)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6c769c]">Featured release</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#2b2f57]">Top story from the ViroBuzz desk</h2>
            </div>
            <Link href="/updates" className="text-sm font-semibold text-[#363062]">View all news</Link>
          </div>
          {featured ? (
            <article className="mt-8 grid overflow-hidden rounded-3xl border border-[#818fb4]/30 bg-white shadow-[0_26px_70px_rgba(54,48,98,0.12)] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[340px]">
                <ContentImage src={heroImageFor(0)} alt={featured.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#6d77a1]">Breaking release</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#202447]">{featured.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f678f]">{excerpt(featured.summary)}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[#6d77a1]">
                  <span>{new Date(featured.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{featured.authorName || 'ViroBuzz Editorial Team'}</span>
                </div>
                <div className="mt-auto pt-6">
                  <Link href={`/updates/${featured.slug}`} className="inline-flex items-center gap-2 rounded-full bg-[#363062] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#435585]">
                    Read full release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ) : null}
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {featureBlocks.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#818fb4]/25 bg-white p-6 shadow-[0_14px_35px_rgba(54,48,98,0.08)] transition hover:-translate-y-1">
                <item.icon className="h-6 w-6 text-[#435585]" />
                <h3 className="mt-4 text-xl font-semibold text-[#252a51]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#646d96]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6c769c]">Latest news</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#2b2f57]">Discover your next story</h2>
            </div>
            <Link href="/updates" className="rounded-full border border-[#818fb4]/40 bg-white px-4 py-2 text-sm font-semibold text-[#363062] transition hover:bg-[#eef1fa]">
              Open newsroom
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post, index) => (
              <Link
                key={post.id}
                href={`/updates/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-[#818fb4]/25 bg-white shadow-[0_14px_36px_rgba(54,48,98,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(54,48,98,0.14)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <ContentImage src={heroImageFor(index + 1)} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#6d77a1]">
                    {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-xl font-semibold text-[#202447]">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#5f678f]">{excerpt(post.summary)}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#363062]">
                    Read story
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="rounded-3xl bg-[linear-gradient(130deg,#363062_0%,#435585_100%)] p-8 text-white shadow-[0_26px_70px_rgba(54,48,98,0.22)]">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5e8c7]">Why teams choose ViroBuzz</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Get results with solutions you need</h2>
                <ul className="mt-5 space-y-3 text-sm text-[#d8def2]">
                  <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#f5e8c7]" /> Verified publishing-first release pages.</li>
                  <li className="inline-flex items-center gap-2"><Newspaper className="h-4 w-4 text-[#f5e8c7]" /> Structured newsroom and archive experience.</li>
                  <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#f5e8c7]" /> Clean mobile-first layout with subtle motion.</li>
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {['Reuters', 'Bloomberg', 'MarketWatch', 'FedEx', 'TechWire', 'StartupBeat'].map((name) => (
                  <div key={name} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-center text-sm font-semibold">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6c769c]">Testimonials</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#2b2f57]">What teams say about ViroBuzz</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="rounded-2xl border border-[#818fb4]/25 bg-white p-6 shadow-[0_14px_36px_rgba(54,48,98,0.08)] transition hover:-translate-y-1"
              >
                <Quote className="h-5 w-5 text-[#435585]" />
                <p className="mt-4 text-sm leading-7 text-[#4f5983]">{item.quote}</p>
                <p className="mt-5 text-base font-semibold text-[#242a52]">{item.author}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-[#7480aa]">{item.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="rounded-3xl border border-[#818fb4]/30 bg-white p-8 text-center shadow-[0_18px_46px_rgba(54,48,98,0.1)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6c769c]">Call to action</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#2b2f57]">Ready to publish your next press release?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#616b95]">
              Launch your newsroom presence with a polished media-ready layout designed for clarity, trust, and discoverability.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-[#363062] px-5 py-3 text-sm font-semibold text-[#f5e8c7] transition hover:bg-[#435585]">
                Start publishing
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#bfc8e6] bg-[#f8f9ff] px-5 py-3 text-sm font-semibold text-[#363062] transition hover:bg-[#eef1fa]">
                Talk to our team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
