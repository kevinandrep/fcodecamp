import { useEffect, useState, useRef } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === "";
      return;
    }

    if (search === "") {
      setError("no se pudo pelicula vacia");
      return;
    }

    if (search.length < 3) {
      setError("la peliucla debe tener 3 caracteres como minimo");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
