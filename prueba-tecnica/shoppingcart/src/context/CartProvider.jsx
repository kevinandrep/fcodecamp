import { useState } from "react";
import { CartContext } from "./CartContext.jsx";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //check if product is already in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    //producto no esta en el carrito
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (producto) => {
    setCart((prevState) => prevState.filter((item) => item.id !== producto.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
