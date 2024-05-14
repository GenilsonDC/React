import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevProducts) => [...prevProducts, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId),
    );
    setCartCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider
      value={{ cartCount, cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
