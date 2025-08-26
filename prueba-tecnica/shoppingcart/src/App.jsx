import { Products } from "./components/Products.jsx";
import { products as InitialProducts } from "./mocks/products.json";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/CartProvider.jsx";

function App() {
  //const [products, setProducts] = useState(InitialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(InitialProducts);

  return (
    <CartProvider>
      <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts} />
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
