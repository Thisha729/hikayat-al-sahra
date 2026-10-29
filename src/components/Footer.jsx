import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <circle cx="20" cy="20" r="18" stroke="#C9A84C" strokeWidth="2" />
                <path d="M8 28 Q14 16 20 20 Q26 24 32 12" stroke="#C9A84C" strokeWidth="2" fill="none" />
                <circle cx="20" cy="12" r="3" fill="#C9A84C" />
              </svg>
              <div>
                <span className="footer__logo-main">Hikayat Al Sahra</span>
                <span className="footer__logo-sub">Tourism LLC</span>
              </div>
            </div>
            <p className="footer__brand-desc">
              Your trusted partner for comprehensive travel and business solutions in Dubai, UAE. We make your dreams come true with professional services and expert guidance.
            </p>
            <div className="footer__social">
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z' },
                { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
                { label: 'WhatsApp', path: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
              ].map((s) => (
                <a key={s.label} href="#" className="footer__social-link" aria-label={s.label}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {['Home', 'Services', 'Destinations', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="footer__link">
                    <span>→</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              {['Tourism Services', 'Visa Services', 'Business Setup', 'PRO Services', 'Holiday Packages', 'Desert Safaris'].map((s) => (
                <li key={s}>
                  <a href="#services" className="footer__link">
                    <span>→</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Info</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <span>📍</span>
                <span>#117 Al Arif Shipping Building, Al Garhoud Road, Port Saeed, Deira, Dubai, UAE</span>
              </div>
              <div className="footer__contact-item">
                <span>📞</span>
                <div>
                  <a href="tel:+97142123456">+971 4 212 3456</a>
                  <br />
                  <a href="tel:+971567505609">+971 56 750 5609</a>
                </div>
              </div>
              <div className="footer__contact-item">
                <span>✉️</span>
                <a href="mailto:hikaystalsahratourism@gmail.com">hikaystalsahratourism@gmail.com</a>
              </div>
              <div className="footer__contact-item">
                <span>🕐</span>
                <span>Sun–Thu: 9AM–6PM | Sat: 9AM–2PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copyright">
            © {currentYear} Hikayat Al Sahra Tourism LLC. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Service</a>
            <span>·</span>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
