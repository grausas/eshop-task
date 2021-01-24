import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    if (isSidebarOpen === true) {
      setIsSidebarOpen(false);
    }
  };

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      cart[index].quantity++;
      setCart([...cart]);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  };

  const decreaseFromCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      if (cart[index].quantity === 1) {
        cart[index].quantity--;
        cart.splice(index, 1);
      } else {
        cart[index].quantity--;
      }
    }
    setCart([...cart]);
  };

  const totalAmount = () => {
    let totalPrice = 0;
    cart.map((item) => {
      if (item.price && item.quantity) {
        totalPrice += item.price * item.quantity;
      }
      return totalPrice;
    });
    return Number(totalPrice.toFixed(2));
  };

  const deleteFromCart = (product) => {
    setCart(
      cart.filter((item) => {
        return item.id !== product.id;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseFromCart,
        totalAmount,
        deleteFromCart,
        isSidebarOpen,
        openSidebar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
