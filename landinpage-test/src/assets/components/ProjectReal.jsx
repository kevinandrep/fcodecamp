import "../estilos/ProjectReal.css";
export function ProjectReal() {
  return (
    <div>
      <header className="header">
        <h1>Project Real</h1>
        <input
          type="checkbox"
          className="header__checkbox"
          id="open-menu"
        ></input>
        <label
          htmlFor="open-menu"
          className="header__open-nav-button"
          role="button"
        >
          =
        </label>

        <div className="header__logo-container">
          <img
            className="header__logo"
            src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/7093284/40f34821fc8449fd9d4614ec413d7b15/eyJ3Ijo0MDB9/2.png?token-hash=2lEUVLF2ypa_eB3PFJe0ZFsfqQ_-rcg5V_tUzLPkBww%3D"
          ></img>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#">About</a>
            </li>
            <li className="header__nav-item">
              <a href="#">Portfolio</a>
            </li>
            <li className="header__nav-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
