import Link from 'next/link'
import { Newspaper, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

function getRegisterConfig() {
  return {
    shell: 'bg-[#f7f8fc] text-[#1f254b]',
    panel: 'border border-[#b9c3e4] bg-white shadow-[0_18px_48px_rgba(54,48,98,0.12)]',
    side: 'border border-[#818fb4]/30 bg-[linear-gradient(140deg,#363062_0%,#435585_100%)] text-white shadow-[0_24px_56px_rgba(54,48,98,0.2)]',
    muted: 'text-[#d7def5]',
    input: 'border border-[#c8cfe5] bg-[#f7f9ff] text-[#1f254b] placeholder:text-[#7681aa]',
    action: 'bg-[#363062] text-[#f5e8c7] hover:bg-[#435585]',
    icon: Newspaper,
    title: 'Create your ViroBuzz account',
    body: 'Start publishing press releases with a modern dashboard built for newsroom workflows and media visibility.',
  }
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const config = getRegisterConfig()
  const Icon = config.icon

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Different onboarding per product family', 'No repeated one-size-fits-all shell', 'Profile, publishing, and discovery aligned'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6a74a0]">Create account</p>
            <form className="mt-6 grid gap-4">
              <input className={`h-12 rounded-xl px-4 text-sm outline-none ring-[#435585]/25 focus:ring-2 ${config.input}`} placeholder="Full name" />
              <input className={`h-12 rounded-xl px-4 text-sm outline-none ring-[#435585]/25 focus:ring-2 ${config.input}`} placeholder="Email address" />
              <input className={`h-12 rounded-xl px-4 text-sm outline-none ring-[#435585]/25 focus:ring-2 ${config.input}`} placeholder="Password" type="password" />
              <input className={`h-12 rounded-xl px-4 text-sm outline-none ring-[#435585]/25 focus:ring-2 ${config.input}`} placeholder="What are you creating or publishing?" />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action}`}>Create account</button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-[#68739d]">
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:text-[#363062] hover:underline">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
