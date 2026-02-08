// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Button.css";

export default function Button({
  children,
  onClick,
  type = "button",
  className = ""
}) {
  return (
    <motion.button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
