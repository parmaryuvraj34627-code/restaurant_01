// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./MenuItem.css";

export default function MenuItem({ item }) {
  return (
    <motion.div
      className="menu-item"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image */}
      <div className="menu-item-image">
        <motion.img
          src={item.image}
          alt={item.name}
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg";
          }}
        />
      </div>

      {/* Content */}
      <div className="menu-item-content">
        <h3 className="menu-item-name">{item.name}</h3>

        {item.description && (
          <p className="menu-item-description">
            {item.description}
          </p>
        )}

        <span className="menu-item-price">
          {item.price.toFixed(2)}
        </span>
      </div>
    </motion.div>
  );
}
