export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-10 backdrop-blur">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready for better banking?</h3>
              <p className="mt-2 text-slate-200/90">Open an account in minutes. No paperwork, no branch visits.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition shadow">Create your account</a>
          </div>
        </div>
      </div>
    </section>
  )
}
