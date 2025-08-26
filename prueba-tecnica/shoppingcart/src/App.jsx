import { Products } from "./components/Products.jsx";
import { products as InitialProducts } from "./mocks/products.json";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { useFilters } from "./hooks/useFilters.js";

function App() {
  //const [products, setProducts] = useState(InitialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(InitialProducts);

  return (
    <>
      <Header></Header>
      <Products products={filteredProducts} />
      <Footer></Footer>
    </>
  );
}

export default App;
