import Link from 'next/link'
import { Newspaper, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

function getLoginConfig() {
  return {
    shell: 'bg-[#f7f8fc] text-[#1f254b]',
    panel: 'border border-[#b9c3e4] bg-white shadow-[0_18px_48px_rgba(54,48,98,0.12)]',
    side: 'border border-[#818fb4]/30 bg-[linear-gradient(140deg,#363062_0%,#435585_100%)] text-white shadow-[0_24px_56px_rgba(54,48,98,0.2)]',
    muted: 'text-[#d7def5]',
    input: 'border border-[#c8cfe5] bg-[#f7f9ff] text-[#1f254b] placeholder:text-[#7681aa]',
    action: 'bg-[#363062] text-[#f5e8c7] hover:bg-[#435585]',
    icon: Newspaper,
    title: 'Sign in to your ViroBuzz newsroom',
    body: 'Access your media dashboard to manage press releases, monitor updates, and keep your newsroom active.',
  }
}

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  const config = getLoginConfig()
  const Icon = config.icon

  return (
    <div className={`min-h-screen ${config.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className={`rounded-[2rem] p-8 ${config.side}`}>
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Cleaner product-specific workflows', 'Palette and layout matched to the site family', 'Fewer repeated admin patterns'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-8 ${config.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6a74a0]">Welcome back</p>
            <form className="mt-6 grid gap-4">
              <input className={`h-12 rounded-xl px-4 text-sm outline-none ring-[#435585]/25 focus:ring-2 ${config.input}`} placeholder="Email address" />
              <input className={`h-12 rounded-xl px-4 text-sm outline-none ring-[#435585]/25 focus:ring-2 ${config.input}`} placeholder="Password" type="password" />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action}`}>Sign in</button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-[#68739d]">
              <Link href="/forgot-password" className="hover:text-[#363062] hover:underline">Forgot password?</Link>
              <Link href="/register" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
