import "./Reservation.css";
import Button from "../components/Button/Button";

export default function Reservation() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    alert("Reservation submitted!");
  };

  return (
    <main className="reservation-page">
      <section className="reservation-header">
        <h1>Book a Table</h1>
        <p>Reserve your spot and enjoy a memorable dining experience.</p>
      </section>

      <section className="reservation-form-section">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Your Phone Number" required />
          </div>

          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" required />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" required />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Guests</label>
              <input type="number" id="guests" min="1" max="20" defaultValue="2" required />
            </div>
          </div>

          <Button type="submit" className="btn-large">
            Reserve Now
          </Button>
        </form>
      </section>
    </main>
  );
}
