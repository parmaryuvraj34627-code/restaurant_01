import "./Hero.css";
import heroImg from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="Delicious food" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Our Restaurant</h1>
        <p className="hero-subtitle">Delicious food, cozy atmosphere, unforgettable moments</p>
        <a href="/reservation" className="hero-button">Reserve a Table</a>
      </div>
    </section>
  );
}
