import { useEffect, useRef, useState } from 'react'
import './About.css'

/* ── scroll-reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/* ── data ── */
const coreValues = [
  { icon: '🤝', title: 'Integrity',       desc: 'We operate with honesty and transparency in all our dealings.',          color: 'blue'   },
  { icon: '⭐', title: 'Excellence',      desc: 'We strive for the highest quality in everything we do.',                  color: 'gold'   },
  { icon: '👥', title: 'Customer Focus', desc: 'Your satisfaction is at the heart of our business.',                       color: 'purple' },
  { icon: '💡', title: 'Innovation',      desc: 'We continuously improve and adapt to serve you better.',                  color: 'orange' },
]

const milestones = [
  { year: '2015', title: 'Founded',         desc: 'Hikayat Al Sahra Tourism LLC established in Dubai, UAE.' },
  { year: '2017', title: '100+ Clients',    desc: 'Reached our first major milestone of 100 satisfied clients.' },
  { year: '2019', title: 'PRO Services',    desc: 'Expanded services to include full PRO and government liaison services.' },
  { year: '2021', title: 'Business Setup',  desc: 'Launched comprehensive UAE business setup & trade license division.' },
  { year: '2024', title: '500+ Clients',    desc: 'Proud to serve over 500 clients from across the globe.' },
]

const About = () => {
  const [introRef,  introVis]  = useReveal(0.1)
  const [mvRef,     mvVis]     = useReveal(0.15)
  const [valRef,    valVis]    = useReveal(0.1)
  const [timeRef,   timeVis]   = useReveal(0.1)
  const [leadRef,   leadVis]   = useReveal(0.1)

  return (
    <div id="aboutpage" className="about">



      {/* ── INTRO ── */}
      <section className="about__intro" ref={introRef}>
        <div className="about__container">
          <div className="about__intro-inner">

            {/* image */}
            <div className={`about__intro-img-wrap ${introVis ? 'about__intro-img-wrap--visible' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Hikayat Al Sahra team"
                loading="lazy"
              />
              <div className="about__intro-badge">
                <span className="about__intro-badge-num">10+</span>
                <span className="about__intro-badge-text">Years of Excellence</span>
              </div>
              <div className="about__intro-logo">
                <img src="/logo.svg" alt="logo" onError={(e) => (e.target.style.display = 'none')} />
              </div>
            </div>

            {/* text */}
            <div className={`about__intro-text ${introVis ? 'about__intro-text--visible' : ''}`}>
              <span className="about__section-tag">
                <span className="about__tag-dot" />
                Who We Are
              </span>
              <h2 className="about__section-title">
                Welcome to<br />
                <span className="about__gold">Hikayat Al Sahra Tourism LLC</span>
              </h2>
              <p className="about__intro-para">
                Hikayat Al Sahra Tourism LLC is a premier travel and business services company
                based in the heart of <strong>Dubai, UAE</strong>. Since our establishment, we
                have been dedicated to providing exceptional services that exceed our clients' expectations.
              </p>
              <p className="about__intro-para">
                We specialise in a comprehensive range of services including{' '}
                <em>tourism packages, visa processing, business setup, PRO services</em>, and much more.
                Our team of experienced professionals is committed to delivering personalised solutions
                tailored to your unique needs.
              </p>
              <p className="about__intro-para">
                With a focus on quality, efficiency, and customer satisfaction, we have successfully
                served thousands of clients from around the world — whether you're planning a dream
                vacation, expanding your business to the UAE, or need assistance with documentation,
                we are here to help you every step of the way.
              </p>
              <a href="#services" className="about__cta-btn">
                Explore Our Services
                <svg viewBox="0 0 16 16" fill="none" width="15" height="15">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="about__mv" ref={mvRef}>
        <div className="about__container">
          <div className="about__mv-grid">

            <div className={`about__mv-card about__mv-card--mission ${mvVis ? 'about__mv-card--visible' : ''}`}
                 style={{ transitionDelay: '0s' }}>
              <div className="about__mv-icon about__mv-icon--blue">🎯</div>
              <h3 className="about__mv-title">Our Mission</h3>
              <p className="about__mv-desc">
                To provide world-class travel and business services that empower our clients to achieve
                their goals with confidence and ease. We are committed to delivering excellence through
                innovation, integrity, and exceptional customer care.
              </p>
              <div className="about__mv-bar" />
            </div>

            <div className={`about__mv-card about__mv-card--vision ${mvVis ? 'about__mv-card--visible' : ''}`}
                 style={{ transitionDelay: '0.15s' }}>
              <div className="about__mv-icon about__mv-icon--gold">🔭</div>
              <h3 className="about__mv-title">Our Vision</h3>
              <p className="about__mv-desc">
                To become the most trusted and preferred partner for travel and business services in
                the UAE and beyond. We aspire to set new standards of excellence and create lasting
                relationships built on trust, transparency, and mutual success.
              </p>
              <div className="about__mv-bar" />
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="about__values" ref={valRef}>
        <div className="about__container">
          <div className={`about__section-header ${valVis ? 'about__section-header--visible' : ''}`}>
            <span className="about__section-tag">
              <span className="about__tag-dot" />
              What We Stand For
            </span>
            <h2 className="about__section-title about__section-title--center">Our Core Values</h2>
            <div className="about__title-bar" />
          </div>

          <div className="about__values-grid">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className={`about__value-card ${valVis ? 'about__value-card--visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`about__value-icon about__value-icon--${v.color}`}>
                  <span>{v.icon}</span>
                </div>
                <h4 className="about__value-title">{v.title}</h4>
                <p className="about__value-desc">{v.desc}</p>
                <div className={`about__value-glow about__value-glow--${v.color}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="about__timeline-sec" ref={timeRef}>
        <div className="about__container">
          <div className={`about__section-header ${timeVis ? 'about__section-header--visible' : ''}`}>
            <span className="about__section-tag">
              <span className="about__tag-dot" />
              Our Journey
            </span>
            <h2 className="about__section-title about__section-title--center about__section-title--white">
              Key Milestones
            </h2>
            <div className="about__title-bar" />
          </div>

          <div className="about__timeline">
            <div className="about__timeline-line" />
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`about__timeline-item ${i % 2 === 0 ? 'about__timeline-item--left' : 'about__timeline-item--right'} ${timeVis ? 'about__timeline-item--visible' : ''}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="about__timeline-dot"><span>{m.year}</span></div>
                <div className="about__timeline-card">
                  <h4 className="about__timeline-title">{m.title}</h4>
                  <p className="about__timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="about__leadership" ref={leadRef}>
        <div className="about__container">
          <div className={`about__section-header ${leadVis ? 'about__section-header--visible' : ''}`}>
            <span className="about__section-tag">
              <span className="about__tag-dot" />
              The Team Behind Our Success
            </span>
            <h2 className="about__section-title about__section-title--center">Our Leadership</h2>
            <p className="about__section-sub">Meet the visionary leader driving our success</p>
            <div className="about__title-bar" />
          </div>

          <div className={`about__leader-card ${leadVis ? 'about__leader-card--visible' : ''}`}>
            <div className="about__leader-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
                alt="Managing Director"
                loading="lazy"
              />
              <div className="about__leader-img-overlay" />
            </div>
            <div className="about__leader-info">
              <span className="about__leader-role">Managing Director</span>
              <h3 className="about__leader-name">Hikayat Al Sahra Tourism LLC</h3>
              <p className="about__leader-bio">
                With over a decade of experience in the travel and business services industry,
                our Managing Director leads Hikayat Al Sahra Tourism LLC with a vision of
                excellence and a commitment to client satisfaction. Under their leadership,
                the company has grown from a boutique travel agency into a comprehensive
                business solutions provider serving clients across the globe.
              </p>
              <div className="about__leader-stats">
                <div className="about__leader-stat">
                  <span className="about__leader-stat-num">10+</span>
                  <span className="about__leader-stat-label">Years Experience</span>
                </div>
                <div className="about__leader-stat">
                  <span className="about__leader-stat-num">500+</span>
                  <span className="about__leader-stat-label">Clients Served</span>
                </div>
                <div className="about__leader-stat">
                  <span className="about__leader-stat-num">20+</span>
                  <span className="about__leader-stat-label">Services Offered</span>
                </div>
              </div>
              <a href="#contact" className="about__cta-btn about__cta-btn--dark">
                Get in Touch
                <svg viewBox="0 0 16 16" fill="none" width="15" height="15">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
