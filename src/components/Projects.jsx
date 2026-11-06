import { useRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'
import { Reveal } from '../lib/motion'

const TONES = ['magenta', 'blue', 'violet', 'teal', 'rust', 'olive', 'green']
const SWIPE_DISTANCE = 50

function ProjectCard({ project, tone, offset, onSelect, expanded, onToggleMore }) {
  const isActive = offset === 0
  const distance = Math.abs(offset)
  const external = project.link && project.link !== '#'
  const cta = external && /github\.com/.test(project.link) ? 'View code' : 'Visit project'
  const tabIndex = isActive ? 0 : -1

  const art = project.image ? (
    <img className="pj-shot" src={project.image} alt={project.title} loading="lazy" draggable={false} />
  ) : (
    <>
      <div className="pj-art"><span>{project.title.charAt(0)}</span></div>
      {project.tech.slice(0, 4).map((t, i) => (
        <span key={t} className={`pj-float pj-float-${i}`}><TechIcon name={t} size={18} /></span>
      ))}
    </>
  )

  return (
    <article
      className={`cf-card tone-${tone}${isActive ? ' active' : ''}`}
      aria-hidden={!isActive}
      data-cursor={isActive ? undefined : offset < 0 ? 'Prev' : 'Next'}
      onClickCapture={(e) => {
        // A side card only comes to the front; its links work once it's there.
        if (isActive) return
        e.preventDefault()
        e.stopPropagation()
        onSelect()
      }}
      style={{
        transform: `translateX(calc(${offset} * (100% + var(--cf-gap)) + var(--drag, 0px))) scale(${isActive ? 1 : 0.92})`,
        opacity: isActive ? 1 : distance === 1 ? 0.4 : distance === 2 ? 0.15 : 0,
        pointerEvents: distance > 2 ? 'none' : undefined,
      }}
    >
      {external ? (
        <a
          className="cf-media"
          href={project.link}
          target="_blank"
          rel="noreferrer"
          tabIndex={tabIndex}
          data-cursor={isActive ? 'Visit' : undefined}
          aria-label={`Open ${project.title}`}
        >
          {art}
        </a>
      ) : (
        <div className="cf-media">{art}</div>
      )}

      <div className="cf-body">
        <p className="eyebrow pj-tag">{project.tag}</p>
        <h3 className="cf-title">{project.title}</h3>
        <p className={`cf-desc${expanded ? ' expanded' : ''}`}>{project.description}</p>
        {/* Phones clamp the description so every card stays a sensible height. */}
        {isActive && (
          <button className="cf-more" onClick={onToggleMore} aria-expanded={expanded}>
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
        <p className="meta-line cf-meta">
          <span className="meta-key pj-tag">Built with</span>
          {project.tech.map((t) => (
            <span key={t} className="meta-tech"><TechIcon name={t} size={13} />{t}</span>
          ))}
        </p>
        {external ? (
          <a className="pj-cta" href={project.link} target="_blank" rel="noreferrer" tabIndex={tabIndex}>
            <span>{cta}</span><span className="pj-cta-arrow" aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="eyebrow tone-muted">Write-up coming soon</span>
        )}
      </div>
    </article>
  )
}

export default function Projects({ data }) {
  const projects = data.projects
  const n = projects.length
  const [active, setActiveIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const stageRef = useRef(null)
  const drag = useRef(null)
  const swallowClick = useRef(false)

  const setActive = (i) => {
    setActiveIndex(i)
    setExpanded(false)
  }
  const go = (dir) => setActive((active + dir + n) % n)

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') go(-1)
    else if (e.key === 'ArrowRight') go(1)
  }

  // Drag with a mouse or swipe with a finger. Vertical swipes still scroll the
  // page (touch-action: pan-y), and a drag never counts as a click on a link.
  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    swallowClick.current = false
    drag.current = { x: e.clientX, dx: 0, moved: false }
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d) return
    d.dx = e.clientX - d.x
    if (!d.moved && Math.abs(d.dx) > 8) {
      d.moved = true
      stageRef.current.setPointerCapture(e.pointerId)
      stageRef.current.classList.add('dragging')
    }
    if (d.moved) stageRef.current.style.setProperty('--drag', `${d.dx}px`)
  }

  const endDrag = () => {
    const d = drag.current
    drag.current = null
    if (!d?.moved) return
    swallowClick.current = true
    stageRef.current.classList.remove('dragging')
    stageRef.current.style.removeProperty('--drag')
    if (d.dx <= -SWIPE_DISTANCE) go(1)
    else if (d.dx >= SWIPE_DISTANCE) go(-1)
  }

  return (
    <section className="section work" id="projects">
      <div className="container">
        <SectionHeader
          number="01"
          title="Selected work"
          blurb="Products, research, and open source: what I've been building lately."
        />
      </div>

      <Reveal
        className="cf"
        role="group"
        aria-roledescription="carousel"
        aria-label="Projects"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div
          className="cf-stage"
          ref={stageRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onDragStart={(e) => e.preventDefault()}
          onClickCapture={(e) => {
            if (!swallowClick.current) return
            swallowClick.current = false
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          {projects.map((p, i) => {
            // Shortest way round the loop, so the last card sits left of the first.
            let offset = i - active
            if (offset > n / 2) offset -= n
            if (offset < -n / 2) offset += n
            return (
              <ProjectCard
                key={p.title}
                project={p}
                tone={TONES[i % TONES.length]}
                offset={offset}
                onSelect={() => setActive(i)}
                expanded={expanded}
                onToggleMore={() => setExpanded((e) => !e)}
              />
            )
          })}
        </div>

        <div className="container cf-controls">
          <p className="cf-counter" aria-live="polite">
            <span className="cf-counter-now">{String(active + 1).padStart(2, '0')}</span>
            <span className="eyebrow tone-muted"> / {String(n).padStart(2, '0')}</span>
            <span className="sr-only">: {projects[active].title}</span>
          </p>

          <ul className="cf-names">
            {projects.map((p, i) => (
              <li key={p.title}>
                <button
                  className={`cf-name${i === active ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                >
                  {p.title}
                </button>
              </li>
            ))}
          </ul>

          <ul className="cf-dots" aria-hidden="true">
            {projects.map((p, i) => (
              <li key={p.title} className={i === active ? 'active' : ''} />
            ))}
          </ul>

          <div className="cf-arrows">
            <button className="cf-arrow" onClick={() => go(-1)} aria-label="Previous project">←</button>
            <button className="cf-arrow" onClick={() => go(1)} aria-label="Next project">→</button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
