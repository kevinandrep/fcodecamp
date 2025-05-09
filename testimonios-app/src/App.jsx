import "./App.css";
import { Testimonio } from "./components/Testimonio.jsx";

const singers = [
  {
    name: "Audra",
    cargo: "vocalista",
    texto: "Cantante principal de F211",
    imagen: "/imagenes/audra.webp",
  },
  {
    name: "Yuqi",
    cargo: "Voz de grupo",
    texto: "Cantante del grupo Gidle",
    imagen: "/imagenes/yuqi.jpg",
  },
  {
    name: "Soyeon",
    cargo: "Lieadr",
    texto: "Lider y productor principal de Gidle",
    imagen: "/imagenes/soyeon.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Principal singers</h1>
        <Testimonio
          nombre={singers[0].name}
          cargo={singers[0].cargo}
          texto={singers[0].texto}
          imagen={singers[0].imagen}
        ></Testimonio>
        <Testimonio
          nombre={singers[1].name}
          cargo={singers[1].cargo}
          texto={singers[1].texto}
          imagen={singers[1].imagen}
        ></Testimonio>
        <Testimonio
          nombre={singers[2].name}
          cargo={singers[2].cargo}
          texto={singers[2].texto}
          imagen={singers[2].imagen}
        ></Testimonio>
      </div>
    </div>
  );
}

export default App;
