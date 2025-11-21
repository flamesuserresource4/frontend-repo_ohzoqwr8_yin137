import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Dashboard from './components/Dashboard'

function App() {
  const [user, setUser] = useState(null)

  function handleLogin() {
    // simple demo auth
    setUser({ email: 'demo@user.com', name: 'Demo User' })
  }
  function handleLogout() {
    setUser(null)
  }

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar onLogin={handleLogin} />
      <Hero onGetStarted={handleLogin} />
      <Features />
      <CTA onGetStarted={handleLogin} />
      <footer className="border-t border-white/10 py-10 text-center text-white/60">© {new Date().getFullYear()} WhatsAI. All rights reserved.</footer>
    </div>
  )
}

export default App
