import { Menu, Bot } from 'lucide-react'

export default function Navbar({ onLogin }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-lg bg-orange-500 text-slate-900 font-bold">🤖</div>
            <span className="font-bold text-white">WhatsAI</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onLogin} className="hidden sm:inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">
              Sign in
            </button>
            <button onClick={onLogin} className="inline-flex rounded-xl bg-orange-500 text-slate-900 font-semibold px-4 py-2 hover:bg-orange-400">
              Get started
            </button>
            <button className="sm:hidden text-white/80" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
