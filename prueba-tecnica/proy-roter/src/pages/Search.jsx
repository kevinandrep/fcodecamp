import { useEffect } from "react";

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `Buscar ${routeParams.query}`;
  }, [routeParams.query]);
  return (
    <>
      <h1>Search</h1>
      <p>Has buscado {routeParams.query}</p>
    </>
  );
}
