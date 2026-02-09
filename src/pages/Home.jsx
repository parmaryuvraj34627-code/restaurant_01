import Hero from "../components/Hero/Hero";
import MenuItem from "../components/MenuItem/MenuItem";
import Button from "../components/Button/Button";
import { getMenuItems } from "../services/menuService";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const menuItems = getMenuItems();
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      {/* Featured Menu Section */}
      <motion.section
        className="home-menu"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="home-menu-header">
          <h2>Our Featured Dishes</h2>
          <p>Delicious dishes crafted with fresh ingredients</p>
        </div>

        <motion.div
          className="home-menu-grid"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <MenuItem item={item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="home-menu-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button className="btn-large" onClick={() => navigate("/menu")}>
            View Full Menu
          </Button>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="home-about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="home-about-content">
          <h2>About Us</h2>
          <p>
            At <strong>Our Restaurant</strong>, we believe in delivering more than just food.
            Every dish is crafted with passion, using fresh, locally-sourced ingredients.
            From traditional favorites to modern culinary creations, we strive to create
            experiences that delight your senses.
          </p>
          <Button className="btn-large" onClick={() => navigate("/about")}>
            Learn More
          </Button>
        </div>
        <motion.div
          className="home-about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/about-restaurant.jpg"
            alt="About Our Restaurant"
          />
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
