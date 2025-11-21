import { motion } from 'framer-motion'
import { MessageSquare, Bot, Zap, ShieldCheck, Settings, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI that understands',
    desc: 'Use powerful language models to answer questions and guide users like a human agent.',
  },
  {
    icon: MessageSquare,
    title: 'Smart flows',
    desc: 'Build branching conversation flows and hand-off to a human when needed.',
  },
  {
    icon: Zap,
    title: 'Instant replies',
    desc: 'Respond in milliseconds with context-aware messages and quick actions.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    desc: 'Role-based access, redaction, and audit trails keep your data safe.',
  },
  {
    icon: Settings,
    title: 'Plug in your tools',
    desc: 'Integrate CRM, ticketing, and internal APIs to automate end-to-end.',
  },
  {
    icon: BarChart3,
    title: 'Actionable analytics',
    desc: 'Track KPIs like CSAT, resolution time, and conversion performance.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(90%_60%_at_50%_0%,rgba(255,255,255,0.04),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-center text-3xl sm:text-4xl font-bold text-white">
          Everything you need to launch a WhatsApp AI
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-orange-500/15 text-orange-400 p-2.5">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
