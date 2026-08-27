import { useMemo, useState } from 'react'

// Deterministic pseudo-random so particles don't reshuffle on every render.
function seeded(i) {
  const x = Math.sin(i * 127.1 + 43.7) * 43758.5453
  return x - Math.floor(x)
}

export default function Hero({ data, onNavigate }) {
  const [hovered, setHovered] = useState(null)

  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        left: seeded(i) * 100,
        top: seeded(i + 100) * 100,
        size: 1 + seeded(i + 200) * 3,
        delay: seeded(i + 300) * 6,
        duration: 3 + seeded(i + 400) * 4,
      })),
    []
  )

  const stars = data.nav.map((item, i) => ({
    ...item,
    ...(data.constellation[i] || { x: 50, y: 50 }),
  }))

  // Connect stars in sequence with faint lines.
  const lines = stars.slice(0, -1).map((s, i) => ({
    x1: s.x, y1: s.y,
    x2: stars[i + 1].x, y2: stars[i + 1].y,
    a: s.id, b: stars[i + 1].id,
  }))

  return (
    <section className="hero">
      {/* Ambient blobs */}
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />
      <div className="hero-blob blob-3" />

      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Constellation connecting lines */}
      <svg className="hero-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {lines.map((l, i) => {
          const active = hovered === l.a || hovered === l.b
          return (
            <line
              key={i}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              className={`constellation-line${active ? ' active' : ''}`}
            />
          )
        })}
      </svg>

      {/* Star nodes */}
      <div className="hero-stars">
        {stars.map((s) => (
          <button
            key={s.id}
            className={`star${hovered === s.id ? ' hover' : ''}`}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(s.id)}
            onBlur={() => setHovered(null)}
            onClick={() => onNavigate(s.id)}
            aria-label={`Go to ${s.label}`}
          >
            <span className="star-ring" />
            <span className="star-dot" />
            <span className="star-label">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Center identity */}
      <div className="hero-identity">
        <p className="hero-eyebrow">Welcome, glad you're here</p>
        <h1 className="hero-name">{data.name}</h1>
        <p className="hero-role">{data.role}</p>
        <p className="hero-subtitle">{data.subtitle}</p>
        <p className="hero-hint">✦ Click a star to explore ✦</p>
      </div>
    </section>
  )
}
