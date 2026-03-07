import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

type FormStatus = 'idle' | 'success' | 'error'

function encodeForm(data: Record<string, string>) {
  return new URLSearchParams(data).toString()
}

function Home() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus('idle')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(payload),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main id="top" className="ac-site">
      <a href="tel:07982008283" className="sticky-call">Call 07982008283</a>
      <a href="https://wa.me/917982008283" className="floating-whatsapp" target="_blank" rel="noreferrer">
        WhatsApp Booking
      </a>

      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Chhatarpur and South Delhi</p>
            <h1>24/7 AC Repair &amp; AC Rental Service in South Delhi</h1>
            <p className="subheadline">
              Fast, affordable, and professional air conditioner services at your doorstep with same-day support.
            </p>
            <div className="cta-row">
              <a href="tel:07982008283" className="btn btn-primary">Call Now - 07982008283</a>
              <a href="https://wa.me/917982008283" className="btn btn-outline" target="_blank" rel="noreferrer">
                WhatsApp Booking
              </a>
              <a href="#book-service" className="btn btn-outline">Request Service</a>
            </div>
            <div className="trust-grid">
              <span>5.0 Google Rating</span>
              <span>24/7 Emergency Service</span>
              <span>Local Chhatarpur Experts</span>
              <span>Same-Day Repair</span>
            </div>
          </div>
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80"
              alt="Technician repairing split AC"
            />
          </div>
        </div>
      </section>

      <section id="book-service" className="section">
        <div className="container">
          <div className="panel">
            <h2>Book AC Service</h2>
            <form
              name="quick-service-request"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="service-form"
            >
              <input type="hidden" name="form-name" value="quick-service-request" />
              <input type="hidden" name="subject" value="New AC service lead" />
              <p className="hidden-field">
                <label>
                  Leave this field empty:
                  <input name="bot-field" />
                </label>
              </p>
              <label>
                Name
                <input name="name" required />
              </label>
              <label>
                Phone Number
                <input name="phone" type="tel" required />
              </label>
              <label>
                Service Required
                <select name="service" required defaultValue="">
                  <option value="" disabled>Select service</option>
                  <option>AC Repair</option>
                  <option>AC Rental</option>
                  <option>AC Installation</option>
                  <option>AC Gas Filling</option>
                  <option>AC Maintenance</option>
                </select>
              </label>
              <label>
                Location
                <input name="location" required />
              </label>
              <label className="form-wide">
                Message
                <textarea name="message" rows={4} />
              </label>
              <button className="btn btn-primary form-wide" type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Request Service'}
              </button>
              {status === 'success' && <p className="form-note success">Request received. A technician will call shortly.</p>}
              {status === 'error' && <p className="form-note error">Unable to submit now. Please call 07982008283.</p>}
            </form>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-grid">
            <article className="panel">
              <h3>AC Repair Service</h3>
              <p>Fast and reliable repair support for all major brands with quick diagnosis and cooling restoration.</p>
              <ul>
                <li>Split AC Repair</li>
                <li>Window AC Repair</li>
                <li>Cooling Issues</li>
                <li>Water Leakage Fix</li>
                <li>Compressor Problems</li>
              </ul>
            </article>
            <article className="panel">
              <h3>AC Rental Service</h3>
              <p>Affordable rental solutions for homes, offices, events, and PG accommodations.</p>
              <ul>
                <li>Daily, Weekly, and Monthly Rental</li>
                <li>Weddings and Events</li>
                <li>Offices and Shops</li>
                <li>PG and Hostel Cooling</li>
              </ul>
            </article>
            <article className="panel">
              <h3>AC Installation Service</h3>
              <p>Professional split and window AC setup with safe electrical integration.</p>
              <ul>
                <li>Proper Mounting</li>
                <li>Safe Wiring</li>
                <li>Performance Testing</li>
              </ul>
            </article>
            <article className="panel">
              <h3>AC Gas Filling</h3>
              <p>Low cooling checks, leak diagnosis, and gas refills with tested process and safety.</p>
              <ul>
                <li>R22 Gas Filling</li>
                <li>R410 Gas Filling</li>
                <li>Gas Leakage Inspection</li>
              </ul>
            </article>
            <article className="panel">
              <h3>AC Maintenance &amp; Service</h3>
              <p>Preventive maintenance to improve efficiency and extend AC lifespan.</p>
              <ul>
                <li>Deep AC Cleaning</li>
                <li>Filter Cleaning</li>
                <li>Coil Cleaning</li>
                <li>Performance Check</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="panel">
            <h2>Why Choose Us</h2>
            <p>Trusted local AC experts in Chhatarpur, committed to fast and professional service delivery.</p>
            <ul>
              <li>Experienced Technicians</li>
              <li>Same-Day Service</li>
              <li>Affordable Pricing</li>
              <li>Genuine Spare Parts</li>
              <li>24/7 Emergency Service</li>
              <li>Quick Response Time</li>
            </ul>
          </div>
          <div className="panel">
            <h2>Service Areas</h2>
            <p>AC services across South Delhi with same-day response for nearby customers.</p>
            <ul>
              <li>Chhatarpur</li>
              <li>Mehrauli</li>
              <li>Saket</li>
              <li>Vasant Kunj</li>
              <li>Malviya Nagar</li>
              <li>Neb Sarai</li>
              <li>Aya Nagar</li>
              <li>Kishangarh</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Customer Reviews</h2>
          <p className="rating">5.0 Google Rating</p>
          <div className="review-grid">
            <article className="panel">
              <h3>Rohit Sharma</h3>
              <p>Very quick AC repair service. Technician arrived within 1 hour and fixed my AC cooling issue.</p>
            </article>
            <article className="panel">
              <h3>Amit Verma</h3>
              <p>Best AC rental service in Chhatarpur. Affordable pricing and quick installation support.</p>
            </article>
            <article className="panel">
              <h3>Neha Gupta</h3>
              <p>Professional technicians and good behavior. Highly recommended for AC repair.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section offer">
        <div className="container offer-box">
          <h2>AC Service Starting at Rs 499</h2>
          <p>Limited-time offer for customers across South Delhi.</p>
          <a href="tel:07982008283" className="btn btn-primary">Call Now to Book Service</a>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container split">
          <div className="panel">
            <h2>Contact Palak AC Rental &amp; Repair Service</h2>
            <p><strong>Address:</strong> Shop No A-28, Near Nanad Hospital, Suman Colony, Block F, Block G, Chhatarpur, New Delhi, Delhi 110074</p>
            <p><strong>Phone:</strong> <a href="tel:07982008283">07982008283</a></p>
            <p><strong>Hours:</strong> Open 24 Hours</p>
            <div className="cta-row">
              <a href="tel:07982008283" className="btn btn-primary">Call Now</a>
              <a
                href="https://maps.google.com/?q=Shop+No+A-28+Near+Nanad+Hospital+Suman+Colony+Chhatarpur+New+Delhi+110074"
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
              <a href="https://wa.me/917982008283" className="btn btn-outline" target="_blank" rel="noreferrer">
                WhatsApp Chat
              </a>
            </div>
          </div>
          <div className="panel map-card">
            <iframe
              title="Palak AC Rental and Repair Service map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Shop%20No%20A-28%20Near%20Nanad%20Hospital%20Suman%20Colony%20Chhatarpur%20New%20Delhi%20110074&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>

      <footer className="section footer">
        <div className="container footer-grid">
          <div>
            <h3>Palak AC Rental &amp; Repair Service</h3>
            <p>Your trusted local experts for AC repair, AC rental, installation, and maintenance in South Delhi.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>AC Repair</li>
              <li>AC Rental</li>
              <li>AC Installation</li>
              <li>AC Gas Filling</li>
              <li>AC Maintenance</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Phone: 07982008283</p>
            <p>Address: Chhatarpur, New Delhi</p>
            <p className="copyright">© 2026 Palak AC Rental &amp; Repair Service</p>
          </div>
        </div>
        <div className="container seo-line">
          AC Repair in Chhatarpur | AC Service in South Delhi | AC Rental in Chhatarpur | Split AC Repair Delhi | 24 Hour AC Repair Delhi
        </div>
      </footer>
    </main>
  )
}

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Palak AC Rental & Repair Service | 24/7 AC Repair in South Delhi',
      },
      {
        name: 'description',
        content:
          'Book same-day AC repair, rental, gas filling, installation, and maintenance in Chhatarpur and South Delhi. Call 07982008283.',
      },
      {
        name: 'keywords',
        content:
          'AC Repair in Chhatarpur, AC Service in South Delhi, AC Rental in Chhatarpur, Split AC Repair Delhi, 24 Hour AC Repair Delhi',
      },
    ],
  }),
  component: Home,
})
