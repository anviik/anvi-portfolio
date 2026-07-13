import { useState } from 'react'
import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'

export default function Skills({ data, onBack }) {
  const groups = data.skillGroups
  const [active, setActive] = useState(0)

  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <SectionHeader number="02" title="Skills" onBack={onBack} />

        <div className="skx">
          {/* Left: editorial category index */}
          <div className="skx-menu" role="tablist" aria-label="Skill categories">
            {groups.map((g, i) => (
              <button
                key={g.category}
                role="tab"
                aria-selected={active === i}
                className={`skx-item${active === i ? ' active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="skx-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="skx-label">{g.category}</span>
                <span className="skx-count">{g.items.length}</span>
              </button>
            ))}
          </div>

          {/* Right: animated skill cloud for the active category */}
          <div className="skx-panel">
            {groups.map((g, i) => (
              <div
                key={g.category}
                role="tabpanel"
                aria-hidden={active !== i}
                className={`skx-cloud${active === i ? ' active' : ''}`}
              >
                {g.items.map((s, j) => (
                  <span
                    key={s.name}
                    className="skx-chip"
                    style={{ transitionDelay: `${0.04 + j * 0.035}s` }}
                  >
                    <span className="skx-chip-icon"><TechIcon name={s.name} size={20} /></span>
                    {s.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
