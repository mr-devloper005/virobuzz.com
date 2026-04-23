'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const topLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Latest News', href: '/updates' },
  { label: 'Contact', href: '/contact' },
]

const primaryLinks = [
  { label: 'Newsroom', href: '/updates' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#818fb4]/25 bg-[#363062]/95 text-white backdrop-blur-xl">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#f5e8c7] sm:px-6">
          <span>ViroBuzz Media Desk</span>
          <div className="hidden items-center gap-5 sm:flex">
            {topLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group inline-flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-sm font-bold uppercase shadow-lg">
            VB
          </div>
          <div>
            <p className="text-lg font-semibold leading-none text-[#f5e8c7]">{SITE_CONFIG.name}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#cfd4e8]">Press Release Network</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {primaryLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#dfe3f3] transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#f5e8c7] transition hover:bg-white/15 sm:inline-flex"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            href="/register"
            className="hidden rounded-full bg-[#f5e8c7] px-4 py-2 text-sm font-semibold text-[#363062] transition hover:bg-white sm:inline-flex"
          >
            Submit Release
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#f5e8c7] md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#2f2a58] px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {primaryLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-[#e9ebf5]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-[#f5e8c7] px-4 py-3 text-sm font-semibold text-[#363062]"
            >
              Submit Release
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
