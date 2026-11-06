import { useEffect, useRef, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'
import { useScrollFrame } from '../lib/motion'

export default function Navbar({ data, activeView, onNavigate, onHome, dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  // Tuck away when scrolling down, come back on any scroll up.
  useScrollFrame(() => {
    const y = window.scrollY
    if (Math.abs(y - lastY.current) < 6) return
    setHidden(y > lastY.current && y > 160)
    lastY.current = y
  })

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => { document.documentElement.style.overflow = '' }
  }, [open])

  const handleNav = (id) => {
    setOpen(false)
    onNavigate(id)
  }

  return (
    <>
      <nav className={`nav${hidden && !open ? ' tucked' : ''}`} onFocus={() => setHidden(false)}>
        <div className="nav-inner container">
          <button className="nav-logo" onClick={() => { setOpen(false); onHome() }} aria-label={`${data.name}, back to top`}>
            <span className="nav-mark" aria-hidden="true">
              {data.name.split(' ').map((w) => w[0]).join('')}
            </span>
            <span className="nav-logo-name" aria-hidden="true">{data.name}</span>
          </button>

          <div className="nav-right">
            <ul className="nav-links">
              {data.nav.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav-link${activeView === item.id ? ' active' : ''}`}
                    onClick={() => handleNav(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle dark mode">
              <span key={dark ? 'sun' : 'moon'} className="theme-icon">
                {dark ? <FaSun size={14} /> : <FaMoon size={13} />}
              </span>
            </button>

            <button
              className={`nav-burger${open ? ' open' : ''}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Sits outside <nav>: the nav's transform would otherwise trap this fixed panel. */}
      <div className={`nav-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <ul>
          {data.nav.map((item, i) => (
            <li key={item.id}>
              <button
                className={`drawer-link${activeView === item.id ? ' active' : ''}`}
                style={{ transitionDelay: open ? `${0.12 + i * 0.05}s` : '0s' }}
                tabIndex={open ? 0 : -1}
                onClick={() => handleNav(item.id)}
              >
                <span className="drawer-num">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
