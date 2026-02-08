import MenuItem from "../components/MenuItem/MenuItem";
import { getMenuItems } from "../services/menuService";
import "./Menu.css";

export default function Menu() {
  const menuItems = getMenuItems();

  return (
    <main className="menu-page">
      <section className="menu-header">
        <h1>Our Menu</h1>
        <p>Explore our delicious dishes crafted with fresh ingredients and love.</p>
      </section>

      <section className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
