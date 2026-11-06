import { Reveal, SplitText } from '../lib/motion'

export default function SectionHeader({ number, title, blurb, tone = 'blue' }) {
  return (
    <header className="sec-head">
      <Reveal variant="line" className="rule" />
      <div className="sec-head-row">
        <Reveal as="p" className={`eyebrow sec-num tone-${tone}`}>{number}</Reveal>
        <SplitText text={title} className="sec-title" />
        {blurb && <Reveal as="p" className="sec-blurb" delay={0.25}>{blurb}</Reveal>}
      </div>
    </header>
  )
}
