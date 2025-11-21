import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Standard',
    price: 'Free',
    perks: ['No monthly fees', 'Instant transfers', 'Virtual card']
  },
  {
    name: 'Plus',
    price: '$8/mo',
    perks: ['Travel insurance', 'Metal card', 'Priority support']
  },
  {
    name: 'Business',
    price: '$29/mo',
    perks: ['Multi-user controls', 'Accountant mode', 'API access']
  }
]

export default function Cards() {
  return (
    <section id="cards" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur hover:bg-slate-900/80 transition">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold">{t.name}</h3>
                <span className="text-slate-300 text-sm">{t.price}</span>
              </div>
              <div className="mt-4 space-y-2">
                {t.perks.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-slate-300/90">
                    <Check size={16} className="text-emerald-400" /> {p}
                  </div>
                ))}
              </div>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-4 py-2 hover:bg-slate-100 transition">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
