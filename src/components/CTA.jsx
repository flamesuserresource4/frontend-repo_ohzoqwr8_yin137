import { motion } from 'framer-motion'

export default function CTA({ onGetStarted }) {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent p-8 sm:p-12">
          <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl sm:text-3xl font-bold text-white">
            Ready to launch your WhatsApp AI?
          </motion.h3>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="mt-2 text-white/80">
            Start free. Connect your number. Deploy in minutes.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.2}} className="mt-6">
            <button onClick={onGetStarted} className="rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-white/90 transition">
              Create my chatbot
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
