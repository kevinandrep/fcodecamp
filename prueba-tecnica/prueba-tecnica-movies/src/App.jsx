import "./App.css";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input type="text" name="search" id="search" placeholder="Search" />
          <button type="input">Buscar</button>
        </form>
      </header>
      <main>Aqui los resultados</main>
    </div>
  );
}

export default App;
