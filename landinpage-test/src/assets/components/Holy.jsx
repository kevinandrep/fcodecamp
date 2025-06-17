import "../estilos/Holy.css";
export function Holy() {
  return (
    <div className="holy-root">
      <header className="header">
        <nav className="main-navbar ">
          <ul>
            <li>
              <a href="#">INICIO</a>
            </li>
            <li>
              <a href="#">NOSOTROS</a>
            </li>
            <li>
              <a href="#">PRODUCTOS</a>
            </li>
            <li>
              <a href="#">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main-wraper">
        <aside className="secondary-navbar">
          <h2>ELIGE EL CONCEPTO</h2>
          <nav>
            <ul>
              <li>
                <a href="#">Concepto 1</a>
              </li>
              <li>
                <a href="#">Concepto 2</a>
              </li>
              <li>
                <a href="#">Concepto 3</a>
              </li>
              <li>
                <a href="#">Concepto 4</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <h1>TITULO PRINCIPAL</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            similique dicta animi labore nobis libero velit, repellendus nulla
            est? Aut voluptas fugiat error vel reiciendis similique eum
            consequatur quae dolores! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nesciunt doloremque pariatur voluptatem, quo odit
            veritatis, magnam numquam assumenda laudantium adipisci, ut minus
            quas sed. Veritatis maiores accusamus atque cumque mollitia.
          </p>
        </main>
        <aside>
          <h2>TITULO RANDOM</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ad
            eum obcaecati. Recusandae nulla architecto dolores rem ipsa eligendi
            laudantium quod aliquid veniam, totam libero, maxime sed sunt iste
            et.
          </p>
        </aside>
      </div>
      <footer>
        <p>kevin @copyright 2027</p>
      </footer>
    </div>
  );
}
