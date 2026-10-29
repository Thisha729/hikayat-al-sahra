import { useEffect, useRef, useState } from 'react'
import './Stats.css'

/* ─── data ─── */
const stats = [
  { number: 500, suffix: '+',   label: 'Trusted Clients',  desc: 'Serving satisfied customers worldwide',      icon: '😊' },
  { number: 24,  suffix: 'hrs', label: 'Fast Processing',  desc: 'Quick and efficient service delivery',        icon: '⚡' },
  { number: 15,  suffix: '+',   label: 'Team Members',     desc: 'Experienced professionals at your service',   icon: '👥' },
  { number: 20,  suffix: '+',   label: 'Services',         desc: 'Comprehensive business solutions',            icon: '🛠️' },
]

const reasons = [
  { icon: '🏆', title: 'Proven Track Record',  desc: 'Years of experience delivering excellence in tourism and business services across the UAE.' },
  { icon: '⚡', title: 'Fast Turnaround',       desc: 'We understand the value of your time. Our streamlined processes ensure quick results.' },
  { icon: '🤝', title: 'Personalised Service', desc: 'Every client receives dedicated attention and solutions tailored to their unique needs.' },
  { icon: '🔒', title: 'Fully Compliant',       desc: 'All our services are 100% compliant with UAE government regulations and standards.' },
]

/* ─── count-up hook ─── */
function useCountUp(target, duration = 2200, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf
    const begin = performance.now()
    const tick = (now) => {
      const p = Math.min((now - begin) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setCount(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])
  return count
}

/* ─── single stat card ─── */
const StatCard = ({ number, suffix, label, desc, icon, animate, index }) => {
  const count = useCountUp(number, 2000 + index * 150, animate)
  return (
    <div
      className={`stats__stat ${animate ? 'stats__stat--animate' : ''}`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <span className="stats__stat-icon">{icon}</span>
      <div className="stats__stat-number">
        {animate ? count : 0}<span className="stats__stat-suffix">{suffix}</span>
      </div>
      <div className="stats__stat-label">{label}</div>
      <div className="stats__stat-desc">{desc}</div>
      {/* animated bottom bar */}
      <div className={`stats__stat-bar ${animate ? 'stats__stat-bar--fill' : ''}`}
           style={{ transitionDelay: `${0.4 + index * 0.12}s` }} />
    </div>
  )
}

/* ─── main section ─── */
const Stats = () => {
  const sectionRef  = useRef(null)
  const [animate,   setAnimate]   = useState(false)
  const [leftVis,   setLeftVis]   = useState(false)
  const [rightVis,  setRightVis]  = useState(false)

  useEffect(() => {
    const makeObs = (cb, thresh = 0.25) =>
      new IntersectionObserver(([e]) => { if (e.isIntersecting) cb(true) }, { threshold: thresh })

    const secObs  = makeObs(setAnimate, 0.2)
    const leftObs = makeObs(setLeftVis, 0.15)
    const rightObs= makeObs(setRightVis,0.15)

    const leftEl  = sectionRef.current?.querySelector('.stats__left')
    const rightEl = sectionRef.current?.querySelector('.stats__right')

    if (sectionRef.current) secObs.observe(sectionRef.current)
    if (leftEl)  leftObs.observe(leftEl)
    if (rightEl) rightObs.observe(rightEl)

    return () => { secObs.disconnect(); leftObs.disconnect(); rightObs.disconnect() }
  }, [])

  return (
    <section id="about" className="stats" ref={sectionRef}>
      {/* decorative bg blobs */}
      <div className="stats__blob stats__blob--1" aria-hidden="true" />
      <div className="stats__blob stats__blob--2" aria-hidden="true" />

      <div className="stats__container">

        {/* ─── LEFT ─── */}
        <div className={`stats__left ${leftVis ? 'stats__left--visible' : ''}`}>
          <span className="stats__tag">
            <span className="stats__tag-dot" />
            Why Choose Us
          </span>
          <h2 className="stats__title">We Are Committed<br/>to Excellence</h2>
          <p className="stats__intro">
            At Hikayat Al Sahra, we combine years of expertise with a genuine passion
            for helping our clients achieve their goals — whether it's a dream vacation
            or a thriving business in the UAE.
          </p>

          <div className="stats__reasons">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`stats__reason ${leftVis ? 'stats__reason--visible' : ''}`}
                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              >
                <div className="stats__reason-icon-wrap">
                  <span className="stats__reason-icon">{r.icon}</span>
                </div>
                <div className="stats__reason-body">
                  <h4 className="stats__reason-title">{r.title}</h4>
                  <p className="stats__reason-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT ─── */}
        <div className={`stats__right ${rightVis ? 'stats__right--visible' : ''}`}>

          {/* Stat cards grid */}
          <div className="stats__grid">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} animate={animate} index={i} />
            ))}
          </div>

          {/* Dubai image */}
          <div className={`stats__image-wrap ${rightVis ? 'stats__image-wrap--visible' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80"
              alt="Dubai skyline"
              loading="lazy"
            />
            <div className="stats__image-overlay" />
            <div className="stats__image-badge">
              <span className="stats__image-badge-text">Trusted Since 2015</span>
              <span className="stats__image-badge-sub">Dubai, UAE</span>
            </div>
            {/* floating logo on image */}
            <div className="stats__image-logo">
              <img src="/logo.svg" alt="logo" onError={(e) => e.target.style.display='none'} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Stats
