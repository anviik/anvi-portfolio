/** Opening curtain: the name rises in, a rule draws across, then the panel lifts off the page. */
export default function Loader({ name, lifting }) {
  return (
    <div className={`loader${lifting ? ' lifting' : ''}`} aria-hidden="true">
      <div className="loader-inner">
        <p className="loader-name">
          {name.split('').map((ch, i) => (
            <span key={i} className="loader-ch">
              <span style={{ animationDelay: `${0.1 + i * 0.03}s` }}>{ch === ' ' ? ' ' : ch}</span>
            </span>
          ))}
        </p>
        <span className="loader-rule" />
      </div>
    </div>
  )
}
