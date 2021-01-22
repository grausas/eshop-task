import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index === -1) {
      product.quantity = 1;
      setCart([...cart, product]);
    } else {
      cart[index].quantity++;
      setCart([...cart]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
