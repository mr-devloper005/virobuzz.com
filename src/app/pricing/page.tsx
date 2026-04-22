import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const plans = [
  {
    name: 'Basic',
    price: '$49',
    description: 'For startups publishing occasional announcements.',
    features: ['1 release / month', 'Standard distribution', 'Basic analytics', 'Email support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$149',
    description: 'For growing teams with regular launch cycles.',
    features: ['5 releases / month', 'Priority distribution', 'Advanced analytics', 'Media pickup report', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$399',
    description: 'For agencies and enterprise media operations.',
    features: ['Unlimited releases', 'Top-tier distribution', 'Executive insights dashboard', 'Dedicated manager', 'SLA support'],
    highlight: false,
  },
]

const faqs = [
  {
    q: 'Can I change plans later?',
    a: 'Yes. You can upgrade or downgrade your plan at any time from your account dashboard.',
  },
  {
    q: 'Do you offer agency pricing?',
    a: 'Yes. Multi-brand and agency bundles are available under our Premium plan.',
  },
  {
    q: 'Are analytics included in every plan?',
    a: 'Yes. All plans include analytics, with deeper reporting available on Pro and Premium.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#1f2448]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <section className="rounded-3xl bg-[linear-gradient(130deg,#363062_0%,#435585_100%)] p-7 text-white shadow-[0_24px_64px_rgba(54,48,98,0.22)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5e8c7]">Business wire pricing</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">Choose the right plan for your newsroom</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#d6ddf3]">
            Compare distribution level, analytics depth, and media reach to select the best plan for your publishing goals.
          </p>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-[0_14px_40px_rgba(54,48,98,0.1)] ${
                plan.highlight
                  ? 'border-[#435585] bg-[linear-gradient(180deg,#eef1fa_0%,#ffffff_100%)]'
                  : 'border-[#818fb4]/30 bg-white'
              }`}
            >
              {plan.highlight ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#363062] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f5e8c7]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most popular
                </span>
              ) : null}
              <h2 className="mt-3 text-2xl font-semibold text-[#242a52]">{plan.name}</h2>
              <p className="mt-2 text-sm text-[#646e99]">{plan.description}</p>
              <p className="mt-5 text-4xl font-semibold text-[#1f2448]">{plan.price}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6f79a5]">per month</p>
              <ul className="mt-5 space-y-3">
                {plan.features.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2 text-sm text-[#46517d]">
                    <Check className="h-4 w-4 text-[#435585]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#363062] px-5 text-sm font-semibold text-white transition hover:bg-[#435585]">
                Get started
              </button>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-[#818fb4]/30 bg-white p-6 shadow-[0_14px_40px_rgba(54,48,98,0.08)]">
          <h2 className="text-2xl font-semibold text-[#252b54]">Features comparison</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#d8def0] text-left text-[#5f6a95]">
                  <th className="py-3 pr-3">Feature</th>
                  <th className="py-3 pr-3">Basic</th>
                  <th className="py-3 pr-3">Pro</th>
                  <th className="py-3">Premium</th>
                </tr>
              </thead>
              <tbody className="text-[#2f3662]">
                <tr className="border-b border-[#edf1fb]"><td className="py-3 pr-3">Distribution level</td><td>Regional</td><td>National</td><td>Global</td></tr>
                <tr className="border-b border-[#edf1fb]"><td className="py-3 pr-3">Analytics</td><td>Standard</td><td>Advanced</td><td>Executive</td></tr>
                <tr><td className="py-3 pr-3">Media reach</td><td>Up to 1k outlets</td><td>Up to 5k outlets</td><td>Custom global network</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#818fb4]/30 bg-white p-6 shadow-[0_14px_40px_rgba(54,48,98,0.08)]">
            <h2 className="text-2xl font-semibold text-[#252b54]">Add-ons</h2>
            <ul className="mt-4 space-y-3 text-sm text-[#4f5986]">
              <li>International translation pack — $39 / release</li>
              <li>Premium media list boost — $59 / release</li>
              <li>Editorial rewrite support — $89 / release</li>
              <li>Featured homepage slot — $99 / day</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#818fb4]/30 bg-white p-6 shadow-[0_14px_40px_rgba(54,48,98,0.08)]">
            <h2 className="text-2xl font-semibold text-[#252b54]">FAQ</h2>
            <div className="mt-4 space-y-4">
              {faqs.map((item) => (
                <article key={item.q} className="rounded-xl border border-[#e1e7f7] bg-[#f8f9ff] p-4">
                  <p className="font-semibold text-[#2b315b]">{item.q}</p>
                  <p className="mt-2 text-sm leading-7 text-[#5d6793]">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-[linear-gradient(130deg,#363062_0%,#435585_100%)] p-7 text-center text-white">
          <h2 className="text-3xl font-semibold">Ready to share your next release?</h2>
          <p className="mt-3 text-sm text-[#d7def4]">Launch your next announcement with a plan that matches your reach goals.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[#f5e8c7] px-5 py-3 text-sm font-semibold text-[#363062] transition hover:bg-white">
            Talk to sales
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
