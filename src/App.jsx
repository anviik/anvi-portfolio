import { useState, useEffect } from 'react'
import siteData from './siteData'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Accomplishments from './components/Accomplishments'
import Contact from './components/Contact'

const SECTION_COMPONENTS = {
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  accomplishments: Accomplishments,
  contact: Contact,
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [activeView, setActiveView] = useState(null)
  const [dark, setDark] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
    }
    return false
  })

  // Splash screen timer
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  // Persist theme
  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  // Scroll to top when the view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [activeView])

  const goHome = () => setActiveView(null)
  const navigate = (id) => setActiveView(id)

  if (loading) return <Loader dark={dark} />

  const ActiveSection = activeView ? SECTION_COMPONENTS[activeView] : null

  return (
    <div className={`site${dark ? ' dark' : ''}`}>
      <Cursor />
      <Navbar
        data={siteData}
        activeView={activeView}
        onNavigate={navigate}
        onHome={goHome}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
      />

      {activeView === null ? (
        <Hero data={siteData} onNavigate={navigate} />
      ) : (
        <main className="page-view" key={activeView}>
          <ActiveSection data={siteData} onBack={goHome} />
        </main>
      )}
    </div>
  )
}
