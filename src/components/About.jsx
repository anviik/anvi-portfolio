import SectionHeader from './SectionHeader'

export default function About({ data, onBack }) {
  const { about, name } = data
  const [firstPara, ...restParas] = about.bio
  const dropCap = firstPara.charAt(0)
  const firstRest = firstPara.slice(1)

  return (
    <section className="section" id="about">
      <div className="section-inner">
        <SectionHeader number="01" title="About Me" onBack={onBack} />

        <div className="about2">
          {/* Editorial lead column */}
          <div className="about2-lead">
            <p className="about2-kicker">{about.greeting} {name.split(' ')[0]}. Nice to meet you.</p>
            <p className="about2-body about2-first">
              <span className="dropcap">{dropCap}</span>{firstRest}
            </p>
            {restParas.map((p, i) => (
              <p key={i} className="about2-body">{p}</p>
            ))}
            <p className="about2-signature">{name}</p>
          </div>

          {/* Index-card fact sheet */}
          <aside className="about2-card card">
            <span className="about2-card-label">Fact Sheet</span>
            <dl className="factsheet">
              {about.facts.map((f, i) => (
                <div key={i} className="fact">
                  <dt>{f.label}</dt>
                  <span className="fact-leader" />
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="about2-now">
              <span className="about2-now-label">◆ Currently</span>
              <ul>
                {about.now.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
