import { useEffect, useState } from 'react'
import { Save, Power, Webhook, MessageCircleMore } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Dashboard({ user, onLogout }) {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    user_email: user?.email || 'demo@user.com',
    is_active: true,
    webhook_url: '',
    greeting_message: "Hi! I'm your WhatsApp AI assistant.",
    auto_replies: ["What's your order number?", "We'll get back to you shortly.", "Thank you for contacting us!"],
  })
  const [savedAt, setSavedAt] = useState(null)

  useEffect(() => {
    async function fetchConfig() {
      try {
        setLoading(true)
        const res = await fetch(`${API}/api/chatbot?user_email=${encodeURIComponent(form.user_email)}`)
        const data = await res.json()
        setForm({
          user_email: data.user_email,
          is_active: data.is_active,
          webhook_url: data.webhook_url || '',
          greeting_message: data.greeting_message || '',
          auto_replies: Array.isArray(data.auto_replies) ? data.auto_replies : [],
        })
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchConfig()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function save() {
    try {
      setLoading(true)
      const res = await fetch(`${API}/api/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      setSavedAt(new Date().toLocaleTimeString())
      setForm({
        user_email: data.user_email,
        is_active: data.is_active,
        webhook_url: data.webhook_url || '',
        greeting_message: data.greeting_message || '',
        auto_replies: Array.isArray(data.auto_replies) ? data.auto_replies : [],
      })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  function updateReply(idx, value) {
    setForm((f) => ({ ...f, auto_replies: f.auto_replies.map((r, i) => (i === idx ? value : r)) }))
  }

  function addReply() {
    setForm((f) => ({ ...f, auto_replies: [...f.auto_replies, 'New quick reply'] }))
  }

  function removeReply(idx) {
    setForm((f) => ({ ...f, auto_replies: f.auto_replies.filter((_, i) => i !== idx) }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <button onClick={onLogout} className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10">Logout</button>
            <button onClick={save} disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-orange-500 text-slate-900 font-semibold px-4 py-2 hover:bg-orange-400 disabled:opacity-60">
              <Save className="h-4 w-4" /> Save
            </button>
          </div>
        </div>

        <p className="mt-2 text-white/70">Manage your WhatsApp AI configuration.</p>
        {savedAt && <p className="mt-1 text-xs text-white/50">Saved at {savedAt}</p>}

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold text-lg">General</h2>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="text-sm text-white/70">Email</span>
                <input value={form.user_email} onChange={(e)=>setForm({...form, user_email:e.target.value})} className="mt-1 w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2" />
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" checked={form.is_active} onChange={(e)=>setForm({...form, is_active:e.target.checked})} />
                <span className="text-sm">Enable chatbot</span>
              </label>
              <label className="block">
                <span className="text-sm text-white/70">Webhook URL</span>
                <input value={form.webhook_url} onChange={(e)=>setForm({...form, webhook_url:e.target.value})} placeholder="https://example.com/webhook" className="mt-1 w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2" />
              </label>
              <label className="block">
                <span className="text-sm text-white/70">Greeting message</span>
                <textarea value={form.greeting_message} onChange={(e)=>setForm({...form, greeting_message:e.target.value})} rows={3} className="mt-1 w-full rounded-lg bg-slate-900 border border-white/10 px-3 py-2" />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold text-lg">Quick replies</h2>
            <div className="mt-4 space-y-3">
              {form.auto_replies.map((r, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input value={r} onChange={(e)=>updateReply(i, e.target.value)} className="flex-1 rounded-lg bg-slate-900 border border-white/10 px-3 py-2" />
                  <button onClick={()=>removeReply(i)} className="text-white/60 hover:text-white">Remove</button>
                </div>
              ))}
              <button onClick={addReply} className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10">Add reply</button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/80"><Power className="h-4 w-4 text-orange-400"/> Status</div>
            <p className="mt-2 text-sm text-white/70">{form.is_active ? 'Active' : 'Paused'}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/80"><Webhook className="h-4 w-4 text-orange-400"/> Webhook</div>
            <p className="mt-2 text-sm text-white/70 truncate">{form.webhook_url || 'Not set'}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/80"><MessageCircleMore className="h-4 w-4 text-orange-400"/> Greeting</div>
            <p className="mt-2 text-sm text-white/70">{form.greeting_message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
