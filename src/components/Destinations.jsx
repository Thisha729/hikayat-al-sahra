import './Destinations.css'

const destinations = [
  {
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=800&q=80',
    country: 'UAE',
    city: 'Dubai',
    tag: 'Most Popular',
    desc: 'City of gold — iconic skyline, world-class shopping, and desert adventures.',
    price: 'From AED 1,200',
  },
  {
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
    country: 'Maldives',
    city: 'Malé',
    tag: 'Trending',
    desc: 'Pristine waters, overwater bungalows, and unmatched natural beauty.',
    price: 'From AED 3,500',
  },
  {
    image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
    country: 'Turkey',
    city: 'Istanbul',
    tag: 'Best Value',
    desc: 'Where East meets West — rich history, stunning mosques, and vibrant bazaars.',
    price: 'From AED 2,100',
  },
  {
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
    country: 'Switzerland',
    city: 'Zurich',
    tag: 'Luxury',
    desc: 'Breathtaking Alps, serene lakes, and world-renowned Swiss hospitality.',
    price: 'From AED 5,800',
  },
  {
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    country: 'India',
    city: 'Taj Mahal',
    tag: 'Heritage',
    desc: 'A timeless symbol of love surrounded by centuries of magnificent history.',
    price: 'From AED 900',
  },
  {
    image: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=800&q=80',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    tag: 'Family',
    desc: 'Vibrant culture, stunning twin towers, and incredible food experiences.',
    price: 'From AED 1,800',
  },
]

const Destinations = () => {
  return (
    <section id="destinations" className="destinations">
      <div className="destinations__container">
        {/* Header */}
        <div className="destinations__header">
          <span className="destinations__tag">Travel Packages</span>
          <h2 className="destinations__title">Featured Destinations</h2>
          <p className="destinations__desc">
            Discover amazing places around the world with our carefully crafted travel packages.
          </p>
        </div>

        {/* Grid */}
        <div className="destinations__grid">
          {destinations.map((dest, index) => (
            <div className="destinations__card" key={index}>
              <div className="destinations__card-img-wrap">
                <img src={dest.image} alt={`${dest.city}, ${dest.country}`} loading="lazy" />
                <span className="destinations__badge">{dest.tag}</span>
              </div>
              <div className="destinations__card-body">
                <div className="destinations__card-location">
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                    <path d="M8 1C5.79 1 4 2.79 4 5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.21-1.79-4-4-4z" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
                    <circle cx="8" cy="5" r="1.5" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
                  </svg>
                  <span>{dest.city}, {dest.country}</span>
                </div>
                <p className="destinations__card-desc">{dest.desc}</p>
                <div className="destinations__card-footer">
                  <span className="destinations__price">{dest.price}</span>
                  <a href="#contact" className="destinations__card-btn">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="destinations__footer">
          <a href="#contact" className="destinations__view-all">
            View All Destinations
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Destinations
