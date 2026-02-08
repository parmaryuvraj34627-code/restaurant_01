import "./About.css";
import chefImg from "../assets/images/chef.jpg";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Passionate chefs, fresh ingredients, unforgettable flavors.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Established in 2024, our restaurant brings together tradition and
            innovation. We believe in crafting dishes with love, using the
            freshest ingredients sourced locally whenever possible.
          </p>
          <p>
            Our mission is to provide a cozy and welcoming atmosphere where
            every meal is a memorable experience. Whether you're here for a
            quick lunch or a family dinner, we treat you like part of our
            family.
          </p>
        </div>

        <div className="about-image">
          <img src={chefImg} alt="Our Chef" />
        </div>
      </section>
    </main>
  );
}
