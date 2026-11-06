import { useRef, useState } from 'react'
import OrgLogo from './OrgLogo'
import TechIcon from './TechIcon'
import { Reveal, SplitText, useScrollFrame } from '../lib/motion'

function formatDate(date) {
  const [start, end] = date.split(' - ')
  return { start, end: end || '' }
}

function TimelineItem({ item }) {
  const { start, end } = formatDate(item.date)
  return (
    <Reveal as="li" className="xp-item">
      <p className="xp-date">
        <span>{start}</span>
        {end && <span>— {end}</span>}
      </p>
      <span className={`xp-node${item.current ? ' current' : ''}`} />
      <div className="xp-body">
        <div className="xp-head">
          <OrgLogo org={item} size={44} />
          <h3 className="xp-company">{item.company}</h3>
        </div>
        <p className="eyebrow tone-blue xp-role">{item.role}</p>
        <p className="xp-desc">{item.description}</p>
        <p className="meta-line">
          <span className="meta-key tone-olive">Focus</span>
          {item.tech.map((t) => (
            <span key={t} className="meta-tech strong"><TechIcon name={t} size={13} />{t}</span>
          ))}
        </p>
      </div>
    </Reveal>
  )
}

export default function Experience({ data }) {
  const items = data.experience
  const listRef = useRef(null)
  const fillRef = useRef(null)
  const [active, setActive] = useState(0)

  // Draws the rail down to a line just under mid-screen, fills each node it has
  // passed, and tells the sticky panel which role is currently in focus.
  useScrollFrame(() => {
    const list = listRef.current
    if (!list) return
    const anchor = window.innerHeight * 0.55
    const rect = list.getBoundingClientRect()
    const p = Math.max(0, Math.min(1, (anchor - rect.top) / rect.height))
    if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`

    let current = 0
    list.querySelectorAll('.xp-node').forEach((node, i) => {
      const passed = node.getBoundingClientRect().top < anchor
      node.classList.toggle('passed', passed)
      if (passed) current = i
    })
    setActive(current)
  })

  const focus = items[active]

  return (
    <section className="section container" id="experience">
      <div className="xp">
        <div className="xp-side">
          <Reveal variant="line" className="rule xp-rule" />
          <Reveal as="p" className="eyebrow tone-olive xp-num">03</Reveal>
          <SplitText text="Experience" className="sec-title xp-title" />

          <div className="xp-focus" aria-hidden="true">
            <div key={active} className="xp-focus-card">
              <OrgLogo org={focus} size={72} />
              <div>
                <p className="xp-focus-name">{focus.short}</p>
                <p className="eyebrow tone-muted">{focus.date}</p>
              </div>
            </div>
            <p className="eyebrow tone-muted xp-count">
              {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
          </div>
        </div>

        <div className="xp-list" ref={listRef}>
          <span className="xp-rail" aria-hidden="true" />
          <span className="xp-rail-fill" ref={fillRef} aria-hidden="true" />
          <ol>
            {items.map((item) => (
              <TimelineItem key={`${item.company}-${item.role}`} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
