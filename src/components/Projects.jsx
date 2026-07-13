import { useRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'

const ACCENTS = ['#c48b9f', '#8e6b9e', '#6bb5c9', '#a8d5a2', '#e8b87e', '#d4a0c4']

export default function Projects({ data, onBack }) {
  const projects = data.projects
  const [active, setActive] = useState(0)
  const touchX = useRef(null)

  const n = projects.length
  const go = (dir) => setActive((a) => (a + dir + n) % n)

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') go(-1)
    else if (e.key === 'ArrowRight') go(1)
  }
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 44) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <SectionHeader number="04" title="Projects" onBack={onBack} />

        <div
          className="coverflow"
          tabIndex={0}
          onKeyDown={onKey}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="cf-arrow prev" onClick={() => go(-1)} aria-label="Previous project">‹</button>

          <div className="cf-stage">
            {projects.map((p, i) => {
              let offset = i - active
              if (offset > n / 2) offset -= n
              if (offset < -n / 2) offset += n
              const abs = Math.abs(offset)
              const isActive = offset === 0
              const external = p.link && p.link !== '#'
              const accent = ACCENTS[i % ACCENTS.length]
              const label = external && /github\.com/.test(p.link) ? 'View code →' : 'Visit project →'

              return (
                <article
                  key={i}
                  className={`cf-card${isActive ? ' active' : ''}`}
                  aria-hidden={!isActive}
                  onClick={() => !isActive && setActive(i)}
                  style={{
                    '--accent': accent,
                    transform: `translateX(-50%) translateX(${offset * 56}%) scale(${
                      isActive ? 1 : Math.max(0.62, 0.82 - (abs - 1) * 0.07)
                    })`,
                    opacity: abs > 2 ? 0 : isActive ? 1 : Math.max(0.18, 0.5 - (abs - 1) * 0.2),
                    zIndex: 20 - abs,
                    pointerEvents: abs > 2 ? 'none' : 'auto',
                  }}
                >
                  <div className="cf-media">
                    {p.image ? (
                      <img src={p.image} alt={p.title} loading="lazy" />
                    ) : (
                      <div className="cf-media-fallback">{p.title}</div>
                    )}
                    <span className="cf-tag">{p.tag}</span>
                  </div>

                  <div className="cf-body">
                    <h3 className="cf-title">{p.title}</h3>
                    <p className="cf-desc">{p.description}</p>
                    <div className="cf-stack">
                      {p.tech.map((t) => (
                        <span key={t} className="cf-chip">
                          <TechIcon name={t} size={14} />
                          {t}
                        </span>
                      ))}
                    </div>
                    {external ? (
                      <a
                        className="cf-cta"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={isActive ? 0 : -1}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="cf-cta muted">Write-up coming soon</span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          <button className="cf-arrow next" onClick={() => go(1)} aria-label="Next project">›</button>
        </div>

        <div className="cf-controls">
          <span className="cf-counter">
            {String(active + 1).padStart(2, '0')}
            <span className="cf-sep"> / </span>
            {String(n).padStart(2, '0')}
          </span>
          <div className="cf-dots">
            {projects.map((p, i) => (
              <button
                key={i}
                className={`cf-dot${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show ${p.title}`}
                aria-current={active === i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
