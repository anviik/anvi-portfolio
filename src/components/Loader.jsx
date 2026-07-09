export default function Loader({ dark }) {
  return (
    <div className={`loader${dark ? ' dark' : ''}`}>
      <div className="loader-constellation">
        <svg viewBox="0 0 120 60" width="120" height="60" aria-hidden="true">
          <line x1="20" y1="40" x2="60" y2="18" className="loader-line" />
          <line x1="60" y1="18" x2="100" y2="42" className="loader-line" />
          <circle cx="20" cy="40" r="5" className="loader-dot" style={{ animationDelay: '0s' }} />
          <circle cx="60" cy="18" r="5" className="loader-dot" style={{ animationDelay: '0.25s' }} />
          <circle cx="100" cy="42" r="5" className="loader-dot" style={{ animationDelay: '0.5s' }} />
        </svg>
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  )
}
