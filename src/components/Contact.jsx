import { SiGithub } from 'react-icons/si'
import { FaEnvelope, FaGlobe, FaLinkedinIn } from 'react-icons/fa6'
import { Reveal, SplitText } from '../lib/motion'

const ICONS = { email: FaEnvelope, linkedin: FaLinkedinIn, github: SiGithub }

export default function Contact({ data }) {
  const { contact, name } = data
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <Reveal as="p" className="eyebrow">06</Reveal>
        <SplitText text="Let’s build something" className="contact-title" />
        <Reveal as="p" className="contact-message" delay={0.2}>{contact.message}</Reveal>

        <ul className="contact-links">
          {contact.links.map((l, i) => {
            const Icon = ICONS[l.type] || FaGlobe
            return (
              <Reveal as="li" key={l.label} delay={i * 0.07}>
                <a
                  className="contact-link"
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <span className="contact-link-icon"><Icon size={20} aria-hidden="true" /></span>
                  <span className="contact-link-label">{l.label}</span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              </Reveal>
            )
          })}
        </ul>

        <footer className="footer">
          <span className="eyebrow">© {new Date().getFullYear()} {name}</span>
          <button className="eyebrow footer-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </footer>
      </div>
    </section>
  )
}
