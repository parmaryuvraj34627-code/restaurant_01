import "./Contact.css";
import Button from "../components/Button/Button";

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions or feedback.</p>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="contact-card">
          <h3>Address</h3>
          <p>123 Culinary Street, Flavor Town, FT 56789</p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>+1 (234) 567-8901</p>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p>info@ourrestaurant.com</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <Button type="submit" className="btn-large">
            Send Message
          </Button>
        </form>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <h2>Find Us Here</h2>
        <iframe
          title="restaurant-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0190952802195!2d-122.41941518468135!3d37.77492977975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c6c1c2f1b%3A0x5c5a6b26f0f02a4b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
