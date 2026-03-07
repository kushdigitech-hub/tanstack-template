import { createFileRoute } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'

const PHONE_NUMBER = '07982008283'
const WHATSAPP_NUMBER = '917982008283'
const MAP_QUERY =
  'Shop No A-28, Near Nanad Hospital, Suman Colony, Chhatarpur, New Delhi, Delhi 110074'

const services = [
  { title: 'AC Repair', description: 'Quick diagnosis and same-day AC repair support.' },
  { title: 'AC Rental', description: 'Daily, weekly, and monthly AC rental for all needs.' },
  { title: 'AC Installation', description: 'Safe and clean installation for split and window AC units.' },
  { title: 'AC Gas Filling', description: 'Performance-focused gas charging for better cooling.' },
  { title: 'AC Maintenance', description: 'Preventive servicing to avoid sudden AC breakdowns.' },
  { title: 'Window AC Service', description: 'Complete cleaning and repair for window AC systems.' },
  { title: 'Split AC Service', description: 'Indoor and outdoor unit servicing by trained technicians.' },
  { title: 'Emergency AC Repair', description: '24-hour emergency support for urgent cooling issues.' },
]

const testimonials = [
  {
    name: 'Ritika Sharma',
    text: 'Booked same-day AC repair in Chhatarpur and the technician arrived quickly. Very professional service.',
  },
  {
    name: 'Arjun Verma',
    text: 'Rented AC units for an event in South Delhi. Setup was smooth and pricing was clear.',
  },
  {
    name: 'Naveen S.',
    text: 'Best local AC service team. Fast response, fair charges, and genuine parts.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Palak AC Rental & Repair Service',
  image:
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  telephone: PHONE_NUMBER,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No A-28, Near Nanad Hospital, Suman Colony, Block F, Block G, Chhatarpur',
    addressLocality: 'New Delhi',
    postalCode: '110074',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Su 00:00-23:59',
  areaServed: ['Chhatarpur', 'South Delhi', 'Saket', 'Mehrauli', 'Vasant Kunj', 'Malviya Nagar'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
  },
  url: 'https://palakacrentalandrepairservice.netlify.app',
}

function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus('idle')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setFormStatus('success')
    } catch (_error) {
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <a href={`tel:${PHONE_NUMBER}`} className="floating-call">
        Call Now
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20AC%20service%20in%20South%20Delhi.`}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <header className="topbar">
        <div className="container topbar-inner">
          <p>5.0 Rated Local AC Experts in South Delhi</p>
          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
        </div>
      </header>

      <main>
        <section className="offer-strip">
          <div className="container offer-grid">
            <p>AC Service Starting Rs 499</p>
            <p>24 Hour Emergency AC Repair Available</p>
          </div>
        </section>

        <section className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="kicker">Palak AC Rental & Repair Service</p>
              <h1>24/7 AC Repair & AC Rental Service in South Delhi</h1>
              <p className="subhead">
                Fast, affordable, and professional air conditioner services at your doorstep across
                Chhatarpur and nearby Delhi areas.
              </p>
              <div className="cta-row">
                <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
                  Call Now
                </a>
                <a href="#service-form" className="btn btn-secondary">
                  Get Service Today
                </a>
              </div>
              <ul className="hero-points">
                <li>Same day repair support</li>
                <li>Open 24 hours</li>
                <li>Trusted local technicians</li>
              </ul>
            </div>
            <div className="hero-media">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
                alt="Technician repairing air conditioner"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section className="trust section">
          <div className="container trust-grid">
            <article>
              <strong>5.0</strong>
              <span>Google Rating</span>
            </article>
            <article>
              <strong>Local</strong>
              <span>Chhatarpur Service Team</span>
            </article>
            <article>
              <strong>24/7</strong>
              <span>Emergency Availability</span>
            </article>
            <article>
              <strong>Same Day</strong>
              <span>Repair Support</span>
            </article>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <h2>AC Services in Chhatarpur & South Delhi</h2>
            <p className="section-intro">
              End-to-end air conditioning solutions for homes, offices, shops, PGs, hostels, and events.
            </p>
            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <span className="service-icon" aria-hidden="true">
                    *
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={`tel:${PHONE_NUMBER}`}>Call Now</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section rental">
          <div className="container rental-box">
            <div>
              <h2>Flexible AC Rental Plans</h2>
              <p>
                Reliable AC rental service for events, temporary use, offices, and PG or hostel properties.
              </p>
              <ul>
                <li>Daily AC rental</li>
                <li>Weekly AC rental</li>
                <li>Monthly AC rental</li>
              </ul>
            </div>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
              Call Now for AC Rental
            </a>
          </div>
        </section>

        <section className="section why-us">
          <div className="container">
            <h2>Why Choose Palak AC Rental & Repair Service</h2>
            <div className="check-grid">
              <p>Experienced technicians</p>
              <p>Fast same-day service</p>
              <p>Affordable pricing</p>
              <p>24/7 availability</p>
              <p>Genuine spare parts</p>
              <p>Trusted local service</p>
            </div>
          </div>
        </section>

        <section className="section areas">
          <div className="container two-col">
            <div>
              <h2>Service Areas</h2>
              <p>
                AC repair near you in Chhatarpur, Mehrauli, Saket, Vasant Kunj, Malviya Nagar, and nearby
                South Delhi areas.
              </p>
              <ul>
                <li>Chhatarpur</li>
                <li>Mehrauli</li>
                <li>Saket</li>
                <li>Vasant Kunj</li>
                <li>Malviya Nagar</li>
                <li>South Delhi</li>
              </ul>
            </div>
            <iframe
              title="Palak AC service location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
              loading="lazy"
            />
          </div>
        </section>

        <section className="section reviews">
          <div className="container">
            <h2>Customer Reviews</h2>
            <p className="section-intro">5.0 Google Rating for AC repair and rental support in Delhi.</p>
            <div className="review-grid">
              {testimonials.map((review) => (
                <article key={review.name}>
                  <p className="stars">*****</p>
                  <p>{review.text}</p>
                  <strong>{review.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section form-section" id="service-form">
          <div className="container two-col">
            <div>
              <h2>Request Service</h2>
              <p>
                Submit the quick form and get a callback for AC repair, AC gas filling, installation, or rental.
              </p>
            </div>
            <form
              name="service-request"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
            >
              <input type="hidden" name="form-name" value="service-request" />
              <input type="hidden" name="bot-field" />
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />

              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" required />

              <label htmlFor="service">Service Required</label>
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                <option>AC Repair</option>
                <option>AC Rental</option>
                <option>AC Installation</option>
                <option>AC Gas Filling</option>
                <option>AC Maintenance</option>
                <option>Emergency AC Repair</option>
              </select>

              <label htmlFor="location">Location</label>
              <input id="location" name="location" type="text" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Share your AC issue or requirement." />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Request Service'}
              </button>
              {formStatus === 'success' && (
                <p className="form-feedback success">Request submitted. The team will call shortly.</p>
              )}
              {formStatus === 'error' && (
                <p className="form-feedback error">
                  Submission failed. Please call {PHONE_NUMBER} or retry in a moment.
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="section contact">
          <div className="container two-col">
            <div>
              <h2>Contact Information</h2>
              <p>Palak AC Rental & Repair Service</p>
              <address>
                Shop No A-28, Near Nanad Hospital,
                <br />
                Suman Colony, Block F, Block G,
                <br />
                Chhatarpur, New Delhi, Delhi 110074
              </address>
              <p>
                Phone: <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
              </p>
              <p>Open 24 Hours</p>
              <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
                Call Now
              </a>
            </div>
            <iframe
              title="Google Map location for Palak AC Rental & Repair Service"
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <h3>Palak AC Rental & Repair Service</h3>
            <p>24/7 AC repair, rental, installation, and maintenance in South Delhi.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#service-form">Request Service</a>
              </li>
              <li>
                <a href={`tel:${PHONE_NUMBER}`}>Call Now</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>AC Repair</li>
              <li>AC Rental</li>
              <li>AC Gas Filling</li>
              <li>Emergency AC Repair</li>
            </ul>
          </div>
          <div>
            <h4>Address</h4>
            <p>Chhatarpur, New Delhi 110074</p>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-footer">
              Call Now
            </a>
          </div>
        </div>
      </footer>

      <div className="mobile-sticky">
        <a href={`tel:${PHONE_NUMBER}`}>Call Now</a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20AC%20service%20in%20South%20Delhi.`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      {
        title: 'AC Repair in Chhatarpur | Palak AC Rental & Repair Service',
      },
      {
        name: 'description',
        content:
          '24 hour AC repair in Delhi with AC rental, gas filling, installation, and maintenance across Chhatarpur and South Delhi.',
      },
      {
        name: 'keywords',
        content:
          'AC Repair in Chhatarpur, AC Repair Near Me, AC Rental in South Delhi, AC Service in Chhatarpur, AC Gas Filling Delhi, 24 Hour AC Repair Delhi',
      },
    ],
  }),
})
