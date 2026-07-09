import { useEffect, useRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const side = index % 2 === 0 ? 'left' : 'right'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`timeline-item ${side}${visible ? ' visible' : ''}`}>
      <div className={`timeline-node${item.current ? ' current' : ''}`}>
        {!item.current && <span className="timeline-check">✓</span>}
      </div>
      <div className="timeline-card card">
        <div className="timeline-card-head">
          <h3 className="timeline-company">{item.company}</h3>
          <span className="timeline-date">{item.date}</span>
        </div>
        <p className="timeline-role">{item.role}</p>
        <p className="timeline-desc">{item.description}</p>
        <div className="tag-row">
          {item.tech.map((t) => (
            <span key={t} className="tag tag--icon">
              <TechIcon name={t} size={13} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience({ data, onBack }) {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <SectionHeader number="03" title="Work Experience" onBack={onBack} />
        <div className="timeline">
          <div className="timeline-line" />
          {data.experience.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
