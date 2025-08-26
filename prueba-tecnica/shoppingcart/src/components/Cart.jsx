import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import "./Cart.css";

export function Cart() {
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon></CartIcon>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden></input>

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
              alt="iphone"
            ></img>
            <div>
              <strong>Iphone</strong> - $1499
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon></ClearCartIcon>
        </button>
      </aside>
    </>
  );
}
