import { useRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'

const ACCENTS = ['#c48b9f', '#8e6b9e', '#6bb5c9', '#a8d5a2', '#e8b87e', '#d4a0c4']

export default function Projects({ data, onBack }) {
  const trackRef = useRef(null)
  const [open, setOpen] = useState(null) // index expanded via tap

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.pcard')
    const amount = card ? card.offsetWidth + 22 : 340
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <SectionHeader number="04" title="Projects" onBack={onBack} />

        <div className="carousel">
          <button className="carousel-btn" onClick={() => scrollByCard(-1)} aria-label="Previous projects">‹</button>

          <div className="carousel-track" ref={trackRef}>
            {data.projects.map((p, i) => {
              const external = p.link && p.link !== '#'
              const accent = ACCENTS[i % ACCENTS.length]
              const isOpen = open === i
              return (
                <article
                  key={i}
                  className={`pcard${isOpen ? ' pcard--open' : ''}`}
                  style={{ '--accent': accent }}
                  onClick={() => setOpen(isOpen ? null : i)}
                  onMouseLeave={() => setOpen((o) => (o === i ? null : o))}
                >
                  <div className="pcard-media">
                    {p.image ? (
                      <img src={p.image} alt={p.title} loading="lazy" />
                    ) : (
                      <div className="pcard-media-fallback">{p.title}</div>
                    )}
                    <span className="pcard-tag">{p.tag}</span>
                  </div>

                  <div className="pcard-body">
                    <h3 className="pcard-title">{p.title}</h3>
                    <p className="pcard-short">{p.short}</p>
                    <span className="pcard-more">{isOpen ? 'Tap to close' : 'Tap / hover for more'}</span>
                  </div>

                  <div className="pcard-detail">
                    <h3 className="pcard-detail-title">{p.title}</h3>
                    <p className="pcard-desc">{p.description}</p>
                    <div className="pcard-stack">
                      {p.tech.map((t) => (
                        <span key={t} className="pcard-chip">
                          <TechIcon name={t} size={15} />
                          {t}
                        </span>
                      ))}
                    </div>
                    {external ? (
                      <a
                        className="pcard-cta"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit project →
                      </a>
                    ) : (
                      <span className="pcard-cta pcard-cta--muted">Write-up coming soon</span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          <button className="carousel-btn" onClick={() => scrollByCard(1)} aria-label="Next projects">›</button>
        </div>

        <p className="carousel-hint">Tap or hover a card for details · swipe or use the arrows →</p>
      </div>
    </section>
  )
}
