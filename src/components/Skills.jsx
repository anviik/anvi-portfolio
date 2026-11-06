import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'
import { Reveal } from '../lib/motion'

export default function Skills({ data }) {
  return (
    <section className="section container" id="skills">
      <SectionHeader
        number="04"
        title="Toolkit"
        tone="teal"
        blurb="The languages, models, and platforms I reach for most."
      />

      <div className="sk-groups">
        {data.skillGroups.map((g, i) => (
          <div key={g.category} className="sk-group">
            <Reveal className="sk-cat">
              <span className="eyebrow tone-teal">{String(i + 1).padStart(2, '0')}</span>
              <h3>{g.category}</h3>
            </Reveal>
            <ul className="sk-grid">
              {g.items.map((s, j) => (
                <Reveal as="li" key={s.name} className="sk-tile" delay={j * 0.025}>
                  <span className="sk-icon"><TechIcon name={s.name} size={17} /></span>
                  <span className="sk-name">{s.name}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
