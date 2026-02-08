/**
 * Format a number as price in USD
 * @param {number} price
 * @returns {string}
 */
export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

/**
 * Capitalize the first letter of a string
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncate a string to a specified length and add ellipsis
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncateText(str, maxLength = 100) {
  if (!str) return "";
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Generate a unique ID (simple version)
 * @returns {string}
 */
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
