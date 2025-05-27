import { useEffect } from "react";

export function Nosotros() {
  const clickear = () => {
    console.log("click");
  };

  useEffect(() => {
    window.addEventListener("click", clickear);

    return () => removeEventListener("click", clickear);
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
      <p>Este es el componente nosotros</p>
    </div>
  );
}
