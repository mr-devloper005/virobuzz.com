import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#1f2448]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <section className="rounded-3xl bg-[linear-gradient(135deg,#363062_0%,#435585_100%)] p-7 text-white shadow-[0_24px_64px_rgba(54,48,98,0.22)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5e8c7]">Support desk</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">Contact Us</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#d6ddf3]">
            Tell us about your publishing needs, distribution questions, or partnership requests. Our media support team responds within one business day.
          </p>
        </section>

        <section className="mt-8">
          <form className="rounded-3xl border border-[#818fb4]/30 bg-white p-6 shadow-[0_16px_44px_rgba(54,48,98,0.1)] sm:p-8">
            <h2 className="text-2xl font-semibold text-[#242a51]">Send us a message</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input className="h-12 rounded-xl border border-[#c8cfe5] bg-[#f8f9ff] px-4 text-sm outline-none ring-[#435585]/30 focus:ring-2" placeholder="Contact name" />
              <input className="h-12 rounded-xl border border-[#c8cfe5] bg-[#f8f9ff] px-4 text-sm outline-none ring-[#435585]/30 focus:ring-2" placeholder="Phone number" />
              <input className="sm:col-span-2 h-12 rounded-xl border border-[#c8cfe5] bg-[#f8f9ff] px-4 text-sm outline-none ring-[#435585]/30 focus:ring-2" placeholder="Email" />
              <select className="h-12 rounded-xl border border-[#c8cfe5] bg-[#f8f9ff] px-4 text-sm outline-none ring-[#435585]/30 focus:ring-2">
                <option>What type of organization are you?</option>
                <option>Agency</option>
                <option>Startup</option>
                <option>Enterprise</option>
                <option>Publisher</option>
              </select>
              <select className="h-12 rounded-xl border border-[#c8cfe5] bg-[#f8f9ff] px-4 text-sm outline-none ring-[#435585]/30 focus:ring-2">
                <option>Subject</option>
                <option>Distribution Support</option>
                <option>Pricing Question</option>
                <option>Partnership</option>
              </select>
              <textarea className="sm:col-span-2 min-h-[150px] rounded-xl border border-[#c8cfe5] bg-[#f8f9ff] px-4 py-3 text-sm outline-none ring-[#435585]/30 focus:ring-2" placeholder="Message / comment" />
            </div>
            <button type="submit" className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[#363062] px-6 text-sm font-semibold text-white transition hover:bg-[#435585]">
              Submit Now
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
