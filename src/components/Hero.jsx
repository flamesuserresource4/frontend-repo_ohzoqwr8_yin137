import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(90%_60%_at_50%_0%,rgba(255,166,0,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-28 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              WhatsApp AI Chatbot Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Build a friendly WhatsApp AI that talks like your brand
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-lg sm:text-xl text-white/70"
            >
              Automate conversations, qualify leads, and support customers 24/7. Smooth to set up. Powerful to scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button onClick={onGetStarted} className="inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-400 active:bg-orange-500 text-slate-900 font-semibold px-5 py-3 transition-colors">
                Get started free
              </button>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition-colors">
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex items-center gap-6 text-sm text-white/60"
            >
              <div>
                <span className="text-white font-semibold">No code</span> setup
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div>
                Works with your WhatsApp Business API
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_100px_rgba(251,146,60,0.1)] overflow-hidden"
          >
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
