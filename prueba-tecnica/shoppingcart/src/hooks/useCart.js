import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export const useCart = () => {
  const context = useContext(CartContext);

  //verficar si el customhook esta siendo utilizado en un contexto envuelto
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
