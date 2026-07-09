export default function SectionHeader({ number, title, onBack }) {
  return (
    <>
      <button className="section-back" onClick={onBack}>← Home</button>
      <span className="section-label">{number}</span>
      <h2 className="section-title">{title}</h2>
    </>
  )
}
