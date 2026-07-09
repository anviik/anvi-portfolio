import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'

export default function Skills({ data, onBack }) {
  let tileIndex = 0
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <SectionHeader number="02" title="Skills" onBack={onBack} />

        <div className="skill-groups">
          {data.skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-group-title">{group.category}</h3>
              <div className="skill-tiles">
                {group.items.map((s) => {
                  const delay = tileIndex++ * 0.035
                  return (
                    <div key={s.name} className="skill-tile card" style={{ animationDelay: `${delay}s` }}>
                      <span className="skill-tile-icon"><TechIcon name={s.name} size={22} /></span>
                      <span className="skill-tile-name">{s.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
