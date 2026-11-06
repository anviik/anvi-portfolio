import SectionHeader from './SectionHeader'
import { Reveal } from '../lib/motion'

export default function About({ data }) {
  const { about, firstName } = data

  return (
    <section className="section container" id="about">
      <SectionHeader number="02" title="About" tone="magenta" />

      <div className="about">
        <div className="about-lead">
          <Reveal as="p" className="about-kicker">
            {about.greeting} <em>{firstName}.</em> Nice to meet you.
          </Reveal>
          {about.bio.map((p, i) => (
            <Reveal as="p" key={i} className="about-body" delay={0.08 + i * 0.08}>{p}</Reveal>
          ))}
        </div>

        <aside className="about-side">
          <Reveal as="p" className="eyebrow tone-muted">Fact sheet</Reveal>
          <dl className="facts">
            {about.facts.map((f, i) => (
              <Reveal key={f.label} className="fact" delay={i * 0.05}>
                <dt className="meta-key tone-muted">{f.label}</dt>
                <dd>{f.value}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal as="p" className="eyebrow tone-magenta about-now-label">Currently</Reveal>
          <ul className="about-now">
            {about.now.map((n, i) => (
              <Reveal as="li" key={n} delay={i * 0.06}>{n}</Reveal>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
