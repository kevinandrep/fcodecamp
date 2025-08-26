import { useCart } from "../hooks/useCart";
import { useFilters } from "../hooks/useFilters";

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();
  return (
    <footer className="footer">
      {JSON.stringify(cart, null, 20)}
      <h4>Mi prueba tecnica de React</h4>
      <span>@KevinPB</span>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  );
}
