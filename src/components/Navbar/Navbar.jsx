import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Restaurant Logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Desktop Links */}
      <div className="navbar-links-desktop">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>Menu</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        <NavLink to="/reservation" className={({ isActive }) => isActive ? "active" : ""}>Reservation</NavLink>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="mobile-menu-overlay"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Sidebar Menu */}
            <motion.div
              className="navbar-links-mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
              <NavLink to="/menu" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Menu</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
              <NavLink to="/reservation" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Reservation</NavLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
