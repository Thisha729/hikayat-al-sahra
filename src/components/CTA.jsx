import { useEffect, useRef, useState } from 'react'
import './CTA.css'

/* ── Intersection helper: adds 'is-visible' when element enters view ── */
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

const officeItems = [
  {
    icon: '📍',
    label: 'Address',
    colorClass: 'gold',
    content: (
      <>
        <span className="cta__office-value">#117 Al Arif Shipping Building</span>
        <span className="cta__office-value">Al Garhoud Road, Port Saeed</span>
        <span className="cta__office-value">Deira, Dubai, UAE</span>
        <span className="cta__office-value"><em>P.O Box: 97699</em></span>
      </>
    ),
  },
  {
    icon: '📞',
    label: 'Phone Numbers',
    colorClass: 'blue',
    content: (
      <>
        <a href="tel:+97142123456"   className="cta__office-value cta__office-link">📱 +971 4 212 3456</a>
        <a href="tel:+971567505609"  className="cta__office-value cta__office-link">📲 +971 56 750 5609</a>
      </>
    ),
  },
  {
    icon: '✉️',
    label: 'Email Address',
    colorClass: 'purple',
    content: (
      <a href="mailto:hikaystalsahratourism@gmail.com" className="cta__office-value cta__office-link">
        hikaystalsahratourism@gmail.com
      </a>
    ),
  },
  {
    icon: '🕐',
    label: 'Business Hours',
    colorClass: 'green',
    content: (
      <>
        <span className="cta__office-value">Sunday – Thursday: 9:00 AM – 6:00 PM</span>
        <span className="cta__office-value cta__office-closed">Friday: Closed</span>
        <span className="cta__office-value">Saturday: 9:00 AM – 2:00 PM</span>
      </>
    ),
  },
]

const CTA = () => {
  const [headerRef,  headerVisible]  = useReveal()
  const [cardsRef,   cardsVisible]   = useReveal()
  const [officeRef,  officeVisible]  = useReveal()
  const [mapRef,     mapVisible]     = useReveal()
  const [formRef,    formVisible]    = useReveal()

  return (
    <section id="contact" className="cta">
      <div className="cta__bg-pattern" aria-hidden="true" />

      <div className="cta__wrapper">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`cta__top-header reveal ${headerVisible ? 'reveal--visible' : ''}`}
        >
          <span className="cta__tag">
            <span className="cta__tag-dot" />
            Get Started Today
          </span>
          <h2 className="cta__title">Ready to Begin Your Journey?</h2>
          <p className="cta__desc">
            Contact us today for a free consultation. Whether you need travel packages, visa assistance,
            or business setup guidance — our expert team is here to help.
          </p>
        </div>

        {/* ── 4 Quick-Contact Cards ── */}
        <div ref={cardsRef} className="cta__cards-row">
          {[
            { href:'tel:+97142123456',  colorClass:'blue',   icon:'📞', label:'Call Us',    lines:['+971 4 212 3456','+971 56 750 5609'], sub:null },
            { href:'mailto:hikaystalsahratourism@gmail.com', colorClass:'purple', icon:'✉️', label:'Email Us', lines:['hikaystalsahratourism@gmail.com'], sub:null },
            { href:'https://wa.me/971567505609', colorClass:'green',  icon:'💬', label:'WhatsApp', lines:['+971 56 750 5609'], sub:'Click to chat' },
            { href:null,                colorClass:'gold',   icon:'📍', label:'Visit Us',   lines:['Al Garhoud Road, Port Saeed','Deira, Dubai, UAE'], sub:null },
          ].map((card, i) => {
            const Tag = card.href ? 'a' : 'div'
            const extra = card.href
              ? { href: card.href, ...(card.href.startsWith('http') ? { target:'_blank', rel:'noopener noreferrer' } : {}) }
              : {}
            return (
              <Tag
                key={i}
                {...extra}
                className={`cta__card ${card.href ? 'cta__card--link' : ''} reveal reveal--card ${cardsVisible ? 'reveal--visible' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`cta__card-icon-wrap cta__card-icon-wrap--${card.colorClass}`}>
                  <span>{card.icon}</span>
                </div>
                <div>
                  <span className="cta__card-label">{card.label}</span>
                  {card.lines.map((l) => <span key={l} className="cta__card-value">{l}</span>)}
                  {card.sub && <span className="cta__card-sub">{card.sub}</span>}
                </div>
              </Tag>
            )
          })}
        </div>

        {/* ── Bottom 2-column ── */}
        <div className="cta__bottom">

          {/* LEFT: Office Details */}
          <div
            ref={officeRef}
            className={`cta__office reveal reveal--left ${officeVisible ? 'reveal--visible' : ''}`}
          >
            <h3 className="cta__office-title">Office Details</h3>

            <div className="cta__office-grid">
              {officeItems.map((item, i) => (
                <div
                  key={i}
                  className={`cta__office-item cta__office-item--animated ${officeVisible ? 'cta__office-item--show' : ''}`}
                  style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                >
                  <span className={`cta__office-icon cta__office-icon--${item.colorClass}`}>
                    {item.icon}
                  </span>
                  <div>
                    <span className="cta__office-label">{item.label}</span>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="cta__office-btns">
              <a href="https://wa.me/971567505609" target="_blank" rel="noopener noreferrer"
                 className="cta__office-btn cta__office-btn--green">
                💬 Chat on WhatsApp
              </a>
              <a href="tel:+97142123456" className="cta__office-btn cta__office-btn--blue">
                📞 Call Us (Landline)
              </a>
              <a href="tel:+971567505609" className="cta__office-btn cta__office-btn--outline">
                📲 Call Mobile
              </a>
            </div>
          </div>

          {/* RIGHT: Map + Form */}
          <div className="cta__bottom-right">

            {/* Google Map */}
            <div
              ref={mapRef}
              className={`cta__map-wrap reveal reveal--right ${mapVisible ? 'reveal--visible' : ''}`}
            >
              <div className="cta__map-header">
                <h3 className="cta__map-title">
                  <span className="cta__map-pin-icon">📍</span>
                  Find Us on Map
                </h3>
              </div>
              <div className="cta__map-frame">
                <iframe
                  title="Hikayat Al Sahra Tourism Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5!2d55.3484!3d25.2554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d238804b845%3A0x3e33abc11d72fa82!2sAl%20Garhoud%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="cta__map-note">
                📌 Located in Deira, Dubai, near Port Saeed. Accessible by metro
                (City Centre Deira Station) or by car with ample parking available.
              </p>
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className={`cta__form-wrap reveal reveal--right ${formVisible ? 'reveal--visible' : ''}`}
              style={{ transitionDelay: '0.15s' }}
            >
              <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
                <h3 className="cta__form-title">Send Us a Message</h3>
                <div className="cta__form-row">
                  <div className="cta__form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Smith" required />
                  </div>
                  <div className="cta__form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="cta__form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+971 50 000 0000" />
                </div>
                <div className="cta__form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service">
                    <option value="">Select a service...</option>
                    <option value="tourism">Tourism Packages</option>
                    <option value="visa">Visa Services</option>
                    <option value="business">Business Setup</option>
                    <option value="pro">PRO Services</option>
                  </select>
                </div>
                <div className="cta__form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="3" placeholder="Tell us how we can help you..." />
                </div>
                <button type="submit" className="cta__form-submit">
                  Send Message
                  <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

          </div>{/* end right */}
        </div>{/* end bottom */}
      </div>
    </section>
  )
}

export default CTA
