import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#1f1a42] text-[#d7ddef]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xl font-semibold text-[#f5e8c7]">{SITE_CONFIG.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#c1c8e3]">
              Modern media release publishing with strong readability, structured discovery, and responsive distribution pages.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ca8ce]">Platform</p>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/">Home</Link>
              <Link href="/updates">Latest News</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ca8ce]">Company</p>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/about">About</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/press">Press</Link>
              <Link href="/help">Help</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ca8ce]">Legal</p>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-5 text-sm text-[#aab4d7]">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
