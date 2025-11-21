import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30" />
          <span className="text-white text-lg font-semibold tracking-tight">FlameBank</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-200/90">
          <a className="hover:text-white transition" href="#services">Services</a>
          <a className="hover:text-white transition" href="#cards">Cards</a>
          <a className="hover:text-white transition" href="#pricing">Pricing</a>
          <a className="hover:text-white transition" href="#faqs">FAQs</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-slate-200/90 hover:text-white text-sm">Log in</a>
          <a href="#cta" className="inline-flex items-center rounded-lg bg-white text-slate-900 text-sm font-semibold px-4 py-2 hover:bg-slate-100 transition shadow">
            Open account
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white/90 p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur px-4 py-3 text-sm text-slate-200">
          <div className="flex flex-col gap-3">
            <a className="hover:text-white transition" href="#services">Services</a>
            <a className="hover:text-white transition" href="#cards">Cards</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition" href="#faqs">FAQs</a>
            <div className="h-px bg-white/10 my-1" />
            <a href="#" className="text-slate-200/90 hover:text-white">Log in</a>
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-4 py-2 hover:bg-slate-100 transition">
              Open account
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
