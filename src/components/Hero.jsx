import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80',
    label: 'Dubai, UAE',
    title: 'Discover the Magic\nof Dubai',
    subtitle: 'Luxury travel experiences, seamless visa processing, and complete business setup services — all under one roof.',
    tag: '✈️ Tourism',
  },
  {
    bg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80',
    label: 'Explore the World',
    title: 'Your Journey\nBegins Here',
    subtitle: 'Curated travel packages to breathtaking destinations around the globe, crafted just for you.',
    tag: '🌍 Destinations',
  },
  {
    bg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80',
    label: 'Business Solutions',
    title: 'Set Up Your\nBusiness in UAE',
    subtitle: 'Fast-track company formation, trade licenses, and PRO services handled by our expert team.',
    tag: '🏢 Business',
  },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const timerRef = useRef(null)

  const goTo = (index) => {
    setCurrent(index)
    setAnimKey((k) => k + 1)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length
        setAnimKey((k) => k + 1)
        return next
      })
    }, 5500)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero__slide ${index === current ? 'hero__slide--active' : ''}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
          aria-hidden={index !== current}
        />
      ))}

      {/* Overlay — lighter so image shows clearly */}
      <div className="hero__overlay" />

      {/* Animated particles */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`hero__particle hero__particle--${i + 1}`} />
        ))}
      </div>

      {/* Content */}
      <div className="hero__content" key={animKey}>
        <span className="hero__label">
          <span className="hero__label-dot" />
          {slides[current].label}
        </span>

        <h1 className="hero__title">
          {slides[current].title.split('\n').map((line, i) => (
            <span key={i} className="hero__title-line">{line}</span>
          ))}
        </h1>

        <p className="hero__subtitle">{slides[current].subtitle}</p>

        <div className="hero__actions">
          <a href="#services" className="hero__btn hero__btn--primary">
            <span>Explore Services</span>
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--outline">
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <path d="M13.5 10.5a1.5 1.5 0 0 1-1.5 1.5H4l-2 2V4a1.5 1.5 0 0 1 1.5-1.5h10A1.5 1.5 0 0 1 15 4v5a1.5 1.5 0 0 1-1.5 1.5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <span>Contact Us</span>
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {[
            { num: '500+', label: 'Happy Clients', icon: '😊' },
            { num: '24hrs', label: 'Fast Processing', icon: '⚡' },
            { num: '15+', label: 'Expert Team', icon: '👥' },
          ].map((stat, i) => (
            <div key={i} className="hero__stat">
              {i > 0 && <div className="hero__stat-divider" />}
              <div className="hero__stat-inner">
                <span className="hero__stat-icon">{stat.icon}</span>
                <span className="hero__stat-number">{stat.num}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Dots */}
      <div className="hero__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero__dot ${index === current ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Slide ${index + 1}`}
          >
            <span className="hero__dot-fill" />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </div>

      {/* Side slide counter */}
      <div className="hero__counter">
        <span className="hero__counter-current">0{current + 1}</span>
        <span className="hero__counter-sep">/</span>
        <span className="hero__counter-total">0{slides.length}</span>
      </div>
    </section>
  )
}

export default Hero
