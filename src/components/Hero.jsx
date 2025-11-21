import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[82vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Now launching multi-currency cards
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Modern banking, designed for how you live
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200/90">
            Spend, save, and grow with a single account. Zero hidden fees, instant transfers, and advanced security.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition shadow">
              Open an account
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white font-semibold px-5 py-3 hover:bg-white/10 transition">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
