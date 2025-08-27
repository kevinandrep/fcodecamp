import { useEffect, useState } from "react";
import "./App.css";
import { EVENTS } from "./assets/consts";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React router desde cero</p>
      <button onClick={() => navigate("/about")}>Ir a sobre nosotros</button>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://imgs.search.brave.com/6yx3NPuIAZdCtHLJE3OwWQl9Ntv1FgkZc4NFBiPIzXU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Yy/MTEvaW1hZ2VzLzYv/NmUvRjIxMV9CYW5u/ZXJfMjAyNS5qcGcv/cmV2aXNpb24vbGF0/ZXN0L3NjYWxlLXRv/LXdpZHRoLWRvd24v/OTAwP2NiPTIwMjUw/ODA2MjI0ODIz"
          alt="Foto de kevin"
        ></img>
      </div>
      <p>Esta es una pagina de f211 para crear un clon de react router</p>
      <button onClick={() => navigate("/")}>Ir a home</button>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);
  return (
    <main>
      {currentPath === "/" && <HomePage></HomePage>}
      {currentPath === "/about" && <AboutPage></AboutPage>}
    </main>
  );
}

export default App;
