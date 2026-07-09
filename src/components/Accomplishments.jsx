import SectionHeader from './SectionHeader'

export default function Accomplishments({ data, onBack }) {
  const [hero, ...rest] = data.accomplishments
  return (
    <section className="section" id="accomplishments">
      <div className="section-inner">
        <SectionHeader number="05" title="Accomplishments" onBack={onBack} />

        {hero && (
          <div className="trophy-hero card" style={{ animationDelay: '0.1s' }}>
            <div className="trophy-badge">
              <span className="trophy-badge-icon">{hero.icon}</span>
            </div>
            <div className="trophy-hero-text">
              <span className="trophy-featured-label">Featured</span>
              <h3 className="trophy-hero-title">{hero.title}</h3>
              <p className="trophy-hero-desc">{hero.description}</p>
            </div>
          </div>
        )}

        <div className="badge-grid">
          {rest.map((a, i) => (
            <div key={i} className="badge-card card" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <span className="badge-icon">{a.icon}</span>
              <h4 className="badge-title">{a.title}</h4>
              <p className="badge-desc">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
