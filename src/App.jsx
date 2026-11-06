import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import siteData from './siteData'
import { prefersReducedMotion } from './lib/motion'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blogs, { BlogArticle } from './components/Blogs'
import Contact from './components/Contact'

const THEME_KEY = 'portfolio-theme'
const SECTION_TONES = {
  projects: 'blue',
  about: 'magenta',
  experience: 'olive',
  skills: 'teal',
  blogs: 'violet',
  contact: 'blue',
}

function readSavedTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === 'dark'
  } catch {
    return false
  }
}

export default function App() {
  // intro: curtain covering the page -> lifting: page animates in underneath -> done
  const [phase, setPhase] = useState(() => (prefersReducedMotion() ? 'done' : 'intro'))
  const [dark, setDark] = useState(readSavedTheme)
  const [activeSection, setActiveSection] = useState(null)
  const [openPost, setOpenPost] = useState(null)
  const pendingScroll = useRef(null)

  useEffect(() => {
    if (phase === 'done') return
    const lift = setTimeout(() => setPhase('lifting'), 1250)
    const done = setTimeout(() => setPhase('done'), 2250)
    return () => { clearTimeout(lift); clearTimeout(done) }
    // Runs once: the timers drive `phase`, they don't depend on it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // On <html> so the portaled article progress bar and overscroll area match too.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    try {
      localStorage.setItem(THEME_KEY, next ? 'dark' : 'light')
    } catch {
      // Storage blocked: the toggle still works for this visit.
    }
  }

  // Scroll spy for the nav underline and the progress bar's tint.
  useEffect(() => {
    if (openPost !== null) return
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [openPost])

  // Moving between the home page and an article has to wait for the new view to render.
  useLayoutEffect(() => {
    const target = pendingScroll.current
    pendingScroll.current = null
    if (target) document.getElementById(target)?.scrollIntoView({ behavior: 'instant' })
    else if (openPost !== null) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [openPost])

  const scrollToSection = (id) => {
    if (openPost !== null) {
      pendingScroll.current = id
      setOpenPost(null)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goHome = () => {
    if (openPost !== null) setOpenPost(null)
    window.scrollTo({ top: 0, behavior: openPost !== null ? 'instant' : 'smooth' })
  }

  const closePost = () => {
    pendingScroll.current = 'blogs'
    setOpenPost(null)
  }

  return (
    <div className={`site${phase === 'intro' ? '' : ' ready'}`}>
      {phase !== 'done' && <Loader name={siteData.name} lifting={phase === 'lifting'} />}
      <Cursor />
      {openPost === null && <ScrollProgress tone={SECTION_TONES[activeSection] || 'blue'} />}
      <Navbar
        data={siteData}
        activeView={openPost === null ? activeSection : 'blogs'}
        onNavigate={scrollToSection}
        onHome={goHome}
        dark={dark}
        onToggleTheme={toggleTheme}
      />

      {openPost !== null ? (
        <main key={openPost}>
          <BlogArticle posts={siteData.blogs} index={openPost} onOpen={setOpenPost} onClose={closePost} />
        </main>
      ) : (
        <main>
          <Hero data={siteData} onNavigate={scrollToSection} />
          <LogoMarquee experience={siteData.experience} />
          <Projects data={siteData} />
          <About data={siteData} />
          <Experience data={siteData} />
          <Skills data={siteData} />
          <Blogs data={siteData} onOpenPost={setOpenPost} />
          <Contact data={siteData} />
        </main>
      )}
    </div>
  )
}
