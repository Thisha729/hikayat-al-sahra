import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="#C9A84C" strokeWidth="2" />
        <path d="M12 24 Q18 14 24 18 Q30 22 36 12" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M16 32 Q20 28 24 30 Q28 32 32 28" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="14" r="2.5" fill="#C9A84C" />
      </svg>
    ),
    title: 'Tourism Services',
    description:
      'Explore the world with our expertly curated travel packages. From luxury desert safaris to international holiday tours, we craft unforgettable experiences tailored to your needs.',
    features: ['Holiday Packages', 'Desert Safaris', 'City Tours', 'Hotel Bookings'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="28" height="32" rx="3" stroke="#C9A84C" strokeWidth="2" />
        <rect x="16" y="6" width="16" height="6" rx="2" stroke="#C9A84C" strokeWidth="2" fill="none" />
        <line x1="16" y1="22" x2="32" y2="22" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="28" x2="28" y2="28" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="34" r="7" fill="#0a0f1e" stroke="#C9A84C" strokeWidth="2" />
        <path d="M31 34 L33 36 L37 32" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Visa Services',
    description:
      'Quick and hassle-free visa processing for employment, family, and visit visas. Our experienced team handles all documentation with precision and speed.',
    features: ['Employment Visas', 'Visit Visas', 'Family Visas', 'Visa Renewals'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 40 L8 20 L24 10 L40 20 L40 40 Z" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <rect x="19" y="28" width="10" height="12" rx="1" stroke="#C9A84C" strokeWidth="2" fill="none" />
        <rect x="14" y="22" width="8" height="6" rx="1" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
        <rect x="26" y="22" width="8" height="6" rx="1" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: 'Business Setup',
    description:
      'Complete company formation and trade license services in the UAE. We guide you through every step — from choosing the right structure to getting your license.',
    features: ['Company Formation', 'Trade Licenses', 'Free Zone Setup', 'Bank Account Opening'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="16" r="8" stroke="#C9A84C" strokeWidth="2" />
        <path d="M8 40 C8 32 28 32 32 40" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M34 22 L42 22" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 28 L40 28" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 34 L38 34" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'PRO Services',
    description:
      'Professional government liaison services for all your documentation needs. We handle typing, attestation, Emirates ID, and all government transactions on your behalf.',
    features: ['Document Attestation', 'Emirates ID', 'Labour Card', 'Govt Transactions'],
  },
]

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__container">
        {/* Header */}
        <div className="services__header">
          <span className="services__tag">What We Offer</span>
          <h2 className="services__title">Our Services at a Glance</h2>
          <p className="services__desc">
            From seamless travel arrangements to complete business solutions, we are your one-stop partner in the UAE.
          </p>
        </div>

        {/* Cards */}
        <div className="services__grid">
          {services.map((service, index) => (
            <div className="services__card" key={index}>
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <ul className="services__card-features">
                {service.features.map((f) => (
                  <li key={f}>
                    <span className="services__check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="services__card-link">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
