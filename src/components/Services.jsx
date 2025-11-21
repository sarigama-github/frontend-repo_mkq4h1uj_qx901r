import { Shield, Smartphone, CreditCard, LineChart, Globe, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Security first',
    desc: 'Biometric login, real-time alerts, and world-class fraud protection.'
  },
  {
    icon: Smartphone,
    title: 'A bank in your pocket',
    desc: 'Everything you need — transfers, bills, analytics — right on mobile.'
  },
  {
    icon: CreditCard,
    title: 'Smart cards',
    desc: 'Virtual and physical cards with dynamic spending controls.'
  },
  {
    icon: LineChart,
    title: 'Insights that matter',
    desc: 'Automatic categorization and budgeting with helpful nudges.'
  },
  {
    icon: Globe,
    title: 'Global by default',
    desc: 'Hold, convert, and spend in 30+ currencies with low fees.'
  },
  {
    icon: Zap,
    title: 'Lightning transfers',
    desc: 'Instant P2P and same-day settlements to local banks.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Everything you expect — and more</h2>
          <p className="mt-3 text-slate-300">We obsess over the details so money simply works wherever life takes you.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur hover:bg-slate-900/80 transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
