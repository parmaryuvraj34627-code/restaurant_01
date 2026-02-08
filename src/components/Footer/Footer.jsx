import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Welcome to our restaurant! Enjoy the finest dishes crafted with
            fresh ingredients and love.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@myrestaurant.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {currentYear} My Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
}
