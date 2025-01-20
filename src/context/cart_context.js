import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

// Helper function to safely get cart data from localStorage
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("thapaCart");
  try {
    if (localCartData) {
      const parsedData = JSON.parse(localCartData);
      if (Array.isArray(parsedData)) {
        return parsedData;
      }
    }
  } catch (error) {
    console.error("Error parsing localStorage data", error);
  }
  return [];
};

// Initial state for the cart
const initialState = {
  cart: getLocalCartData(),
  total_item: 0,
  total_price: 0,
  shipping_fee: 50000,
};

const CartContext = createContext();

// CartProvider component to provide context to children components
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action to add an item to the cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // Action to decrement the quantity of a product
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  // Action to increment the quantity of a product
  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // Action to remove an item from the cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // Action to clear the entire cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Update the localStorage whenever cart changes
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    if (state.cart && Array.isArray(state.cart)) {
      localStorage.setItem("thapaCart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access CartContext
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
