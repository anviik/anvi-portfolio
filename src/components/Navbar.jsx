import { useState, useEffect } from 'react'

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navbar({ data, activeView, onNavigate, onHome, dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  // Lock scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = (id) => {
    onNavigate(id)
    setOpen(false)
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => { onHome(); setOpen(false) }}>
          <span className="nav-logo-chevron">‹</span>
          {data.name}
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
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className={`nav-burger${open ? ' open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' open' : ''}`}>
        <ul>
          {data.nav.map((item) => (
            <li key={item.id}>
              <button
                className={`drawer-link${activeView === item.id ? ' active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open && <div className="nav-scrim" onClick={() => setOpen(false)} />}
    </nav>
  )
}
