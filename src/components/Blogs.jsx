import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import SectionHeader from './SectionHeader'
import { Reveal } from '../lib/motion'

const ACCENTS = ['var(--magenta)', 'var(--blue)', 'var(--violet)']

/** Rough read time from the post body, good enough, and it never goes stale. */
function countWords(blocks) {
  return blocks.reduce((n, b) => {
    if (b.type === 'split') return n + countWords(b.blocks)
    if (b.type === 'flow') return n + b.steps.reduce((m, s) => m + (s.title + ' ' + s.text).split(/\s+/).length, 0)
    if (b.type === 'lessons') return n + b.items.reduce((m, i) => m + (i.lead + ' ' + i.text).split(/\s+/).length, 0)
    if (b.type === 'list') return n + b.items.join(' ').split(/\s+/).length
    if (b.type === 'table') return n + b.rows.flat().join(' ').split(/\s+/).length
    return n + (b.text ? b.text.split(/\s+/).length : 0)
  }, 0)
}

function readTime(post) {
  return Math.max(1, Math.round(countWords(post.body) / 220))
}

/** Renders **bold** spans inside plain post text. */
function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h3 className="article-h2">{block.text}</h3>

    case 'image':
      return (
        <figure className="article-figure">
          <img src={block.src} alt={block.alt} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )

    // Image beside text. `side` is where the image sits on desktop; on narrow
    // screens both stack with the image first regardless.
    case 'split':
      return (
        <div className={`article-split image-${block.side || 'right'}${block.narrow ? ' narrow' : ''}`}>
          <figure className="article-split-figure">
            <img src={block.image.src} alt={block.image.alt} loading="lazy" />
            {block.image.caption && <figcaption>{block.image.caption}</figcaption>}
          </figure>
          <div className="article-split-text">
            {block.blocks.map((b, i) => <Block key={i} block={b} />)}
          </div>
        </div>
      )

    // Screen-by-screen walkthrough: shots in a grid with arrows between them,
    // laid out on a panel. The arrow lives inside the shot so it always centres
    // on the image no matter how tall the caption underneath runs.
    case 'flow': {
      const cols = block.columns || block.steps.length
      return (
        <div className={`article-flow${block.wide ? ' wide' : ''}`}>
          <div className="article-flow-head">
            <span className="article-flow-eyebrow">{block.audience}</span>
            <h4 className="article-flow-title">{block.title}</h4>
            {block.note && <p className="article-flow-note">{block.note}</p>}
          </div>

          <ol className="article-flow-track" style={{ '--cols': cols }}>
            {block.steps.map((s, i) => (
              <li key={i} className="article-flow-step">
                <div className="article-flow-shot">
                  {/* First step of a wrapped row gets a downward arrow instead. */}
                  {i > 0 && (
                    <span
                      className={`article-flow-arrow${i % cols === 0 ? ' down' : ''}`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                  {/* `ratio` + `pos` crop the shot so browser chrome and dead
                      space get trimmed without touching the source file. */}
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    style={
                      s.ratio
                        ? { aspectRatio: s.ratio, objectFit: 'cover', objectPosition: s.pos || 'top' }
                        : undefined
                    }
                  />
                </div>
                <div className="article-flow-cap">
                  <span className="article-flow-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="article-flow-cap-title">{s.title}</span>
                  <span className="article-flow-cap-text">{s.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )
    }

    case 'quote':
      return <blockquote className="article-quote"><Rich text={block.text} /></blockquote>

    case 'table':
      return (
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr>{block.head.map((h) => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'list':
      return (
        <ul className="article-list">
          {block.items.map((item, i) => <li key={i}><Rich text={item} /></li>)}
        </ul>
      )

    case 'lessons':
      return (
        <div className="article-lessons">
          {block.items.map((item, i) => (
            <div key={i} className="article-lesson">
              <span className="article-lesson-lead">{item.lead}</span>
              <p className="article-lesson-text">{item.text}</p>
            </div>
          ))}
        </div>
      )

    case 'note':
      return <p className="article-note"><Rich text={block.text} /></p>

    default:
      return <p className="article-para"><Rich text={block.text} /></p>
  }
}

function ArticleView({ post, accent, onBackToList, onReadNext, next }) {
  const [progress, setProgress] = useState(0)
  const bodyRef = useRef(null)

  // Reading-progress bar tied to the article body, not the whole page.
  useEffect(() => {
    const update = () => {
      const el = bodyRef.current
      if (!el) return
      const start = el.offsetTop - window.innerHeight * 0.4
      const span = el.offsetHeight
      const p = (window.scrollY - start) / span
      setProgress(Math.min(1, Math.max(0, p)))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [post])

  return (
    <article className="article" style={{ '--accent': accent }}>
      {/* Portaled to <body>: .article carries an animation, and its residual
          identity transform would otherwise anchor this fixed bar to the
          article box instead of the viewport. */}
      {createPortal(
        <div className="article-progress" style={{ '--accent': accent }} aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>,
        document.body
      )}

      <button className="article-back" onClick={onBackToList}>
        <span aria-hidden="true">←</span> All posts
      </button>

      <header className="article-head">
        <div className="article-meta">
          <span className="article-kicker">{post.kicker}</span>
          <span className="article-dot">·</span>
          <span>{post.date}</span>
          <span className="article-dot">·</span>
          <span>{readTime(post)} min read</span>
        </div>

        <h1 className="article-title">{post.title}</h1>
        {post.lead && <p className="article-lead">{post.lead}</p>}

        <div className="article-tags">
          {post.tags.map((t) => <span key={t} className="post-tag">{t}</span>)}
        </div>

        {post.links?.length > 0 && (
          <div className="article-links">
            {post.links.map((l) => (
              <a key={l.href} className="pj-cta" href={l.href} target="_blank" rel="noreferrer">
                <span>{l.label}</span><span className="pj-cta-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </header>

      {post.cover && (
        <div className="article-cover">
          <img src={post.cover} alt={post.coverAlt || ''} />
        </div>
      )}

      {post.stats?.length > 0 && (
        <div className="article-stats">
          {post.stats.map((s) => (
            <div key={s.label} className="article-stat">
              <span className="article-stat-value">{s.value}</span>
              <span className="article-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="article-body" ref={bodyRef}>
        {post.body.map((block, i) => <Block key={i} block={block} />)}
      </div>

      <footer className="article-foot">
        {next ? (
          <button className="article-next" onClick={onReadNext}>
            <span className="article-next-label">Next post</span>
            <span className="article-next-title">{next.title}</span>
            <span className="article-next-arrow" aria-hidden="true">→</span>
          </button>
        ) : (
          <button className="article-next" onClick={onBackToList}>
            <span className="article-next-label">Back to</span>
            <span className="article-next-title">All posts</span>
            <span className="article-next-arrow" aria-hidden="true">→</span>
          </button>
        )}
      </footer>
    </article>
  )
}

/** A single post, shown in place of the home page. */
export function BlogArticle({ posts, index, onOpen, onClose }) {
  return (
    <section className="section container">
      <ArticleView
        key={posts[index].slug}
        post={posts[index]}
        accent={ACCENTS[index % ACCENTS.length]}
        next={posts[index + 1] || null}
        onReadNext={() => onOpen(index + 1)}
        onBackToList={onClose}
      />
    </section>
  )
}

export default function Blogs({ data, onOpenPost }) {
  return (
    <section className="section container" id="blogs">
      <SectionHeader
        number="05"
        title="Blog"
        tone="violet"
        blurb="Long-form write-ups of the things I’ve built and run: what actually happened, and what each one taught me."
      />

      <div className="blog-list">
        {data.blogs.map((p, i) => (
          <Reveal key={p.slug} className="blog-item">
            <button
              className="blog-row"
              onClick={() => onOpenPost(i)}
              data-cursor="Read"
              style={{ '--accent': ACCENTS[i % ACCENTS.length] }}
            >
              <span className="blog-thumb">
                {/* `thumb` overrides the cover in the list only; `thumbPos` picks the crop, `thumbFit: 'contain'` skips it. */}
                {p.thumb || p.cover
                  ? <img src={p.thumb || p.cover} alt="" loading="lazy" className={p.thumbFit === 'contain' ? 'contain' : undefined} style={p.thumbPos ? { objectPosition: p.thumbPos } : undefined} />
                  : <span className="blog-thumb-mono" aria-hidden="true">{p.title.charAt(0)}</span>}
              </span>

              <span className="blog-text">
                <span className="post-meta">
                  <span className="post-kicker">{p.kicker}</span>
                  <span className="post-dot">/</span>
                  <span className="post-date">{p.date}</span>
                  <span className="post-dot">/</span>
                  <span className="post-date">{readTime(p)} min read</span>
                </span>
                <span className="blog-title">{p.title}</span>
                <span className="blog-dek">{p.dek}</span>
              </span>

              <span className="blog-arrow" aria-hidden="true">Read post <span>→</span></span>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
