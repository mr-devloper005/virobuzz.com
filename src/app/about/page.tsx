import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const values = [
  {
    title: 'Editorial quality first',
    body: 'Every release page is structured for readability, credibility, and newsroom-style scanning.',
  },
  {
    title: 'Distribution-aware design',
    body: 'Our platform is built around visibility goals, from category discovery to media reach.',
  },
  {
    title: 'Fast publishing workflow',
    body: 'Teams can create, review, and publish updates quickly without compromising presentation quality.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#1f2448]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <section className="rounded-3xl bg-[linear-gradient(130deg,#363062_0%,#435585_100%)] p-7 text-white shadow-[0_24px_64px_rgba(54,48,98,0.22)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5e8c7]">About ViroBuzz</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">Built for modern media press releases</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#d6ddf3]">
            ViroBuzz.com helps organizations publish announcements and updates with a polished newsroom experience that feels modern, trustworthy, and easy to navigate.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-[#818fb4]/30 bg-white p-6 shadow-[0_14px_40px_rgba(54,48,98,0.1)] sm:p-7">
            <h2 className="text-2xl font-semibold text-[#232851]">Our story</h2>
            <p className="mt-4 text-sm leading-8 text-[#5f6995]">
              We created ViroBuzz.com for teams that want more than a basic feed. The product combines structured listing surfaces, focused article reading, and strong visual hierarchy so every release carries authority.
            </p>
            <p className="mt-3 text-sm leading-8 text-[#5f6995]">
              The result is a platform where journalists can scan quickly, audiences can read comfortably, and brands can publish confidently.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ['10k+', 'Published releases'],
                ['120+', 'Industry categories'],
                ['24/7', 'Global visibility'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-[#dde3f4] bg-[#f8f9ff] p-4">
                  <p className="text-2xl font-semibold text-[#232851]">{value}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#68739f]">{label}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            {values.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#818fb4]/30 bg-white p-5 shadow-[0_10px_28px_rgba(54,48,98,0.08)]">
                <h3 className="text-lg font-semibold text-[#262d56]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#606a94]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-[#818fb4]/30 bg-white p-6 shadow-[0_14px_40px_rgba(54,48,98,0.08)]">
          <h2 className="text-2xl font-semibold text-[#232851]">Ready to work with us?</h2>
          <p className="mt-3 text-sm leading-8 text-[#5f6995]">
            Whether you are launching a product, sharing company milestones, or publishing regular updates, ViroBuzz gives you a refined publishing surface tailored for media communication.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/pricing" className="rounded-full bg-[#363062] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#435585]">
              View pricing
            </Link>
            <Link href="/contact" className="rounded-full border border-[#b8c2e4] bg-[#f8f9ff] px-5 py-2.5 text-sm font-semibold text-[#363062] transition hover:bg-[#eef1fa]">
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
