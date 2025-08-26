import { useState } from "react";
import { FiltersContext } from "./context";

//Paso 2: Crear el provider para proveer el contexto PROVEE ACCESO AL CONTEXTO
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 35,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
