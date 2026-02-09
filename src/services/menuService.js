// Sample menu data
const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.99,
    image: "public/images/dish1.jpg",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    price: 14.99,
    image: "public/images/dish2.jpg",
  },
  {
    id: 3,
    name: "Grilled Salmon",
    price: 18.99,
    image: "public/images/dish3.jpg",
  },
  {
    id: 4,
    name: "Caesar Salad",
    price: 9.99,
    image: "public/images/dish4.jpg",
  },
  {
    id: 5,
    name: "Tiramisu",
    price: 6.99,
    image: "public/images/dessert1.jpg",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    price: 7.99,
    image: "public/images/dessert2.jpg",
  },
];

/**
 * Fetch all menu items
 * Currently returns static data; can be replaced with API call
 */
export function getMenuItems() {
  return menuItems;
}

/**
 * Fetch a single menu item by ID
 * @param {number} id
 * @returns {object | undefined}
 */
export function getMenuItemById(id) {
  return menuItems.find((item) => item.id === id);
}
