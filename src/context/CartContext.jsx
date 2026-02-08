import { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  items: [], // Example: reserved menu items or cart items
};

// Actions
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_CART = "CLEAR_CART";

// Reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      // Check if item already exists
      // eslint-disable-next-line no-case-declarations
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}

// Create context
const CartContext = createContext();

// Provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Action dispatchers
  const addItem = (item) => dispatch({ type: ADD_ITEM, payload: item });
  const removeItem = (item) => dispatch({ type: REMOVE_ITEM, payload: item });
  const clearCart = () => dispatch({ type: CLEAR_CART });

  return (
    <CartContext.Provider value={{ cart: state, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
