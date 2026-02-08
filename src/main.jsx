import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Optional: import global CSS (already imported in App.jsx, but can also be here)
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
