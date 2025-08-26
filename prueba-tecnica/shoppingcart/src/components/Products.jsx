import { AddToCartIcon } from "./icons";
import "./Products.css";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title}></img>
            <div>
              <strong>
                {product.title} - ${product.price}
              </strong>
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
