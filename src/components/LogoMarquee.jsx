import OrgLogo from './OrgLogo'

/** Endless strip of every organization on the experience list, one entry each. */
export default function LogoMarquee({ experience }) {
  const orgs = [...new Map(experience.map((e) => [e.short, e])).values()]

  const row = (hidden) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {orgs.map((org) => (
        <li key={org.short} className="marquee-item">
          <OrgLogo org={org} size={40} />
          <span className="marquee-name">{org.short}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <section className="marquee" aria-label="Organizations I've worked with">
      <p className="marquee-label container">Where I’ve worked</p>
      <div className="marquee-viewport">
        <div className="marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  )
}
