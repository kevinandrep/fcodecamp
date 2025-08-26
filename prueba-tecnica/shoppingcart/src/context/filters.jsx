import { createContext, useState } from "react";

//Paso 1: Crear el contexto EL QUE SE CONSUME
export const FiltersContext = createContext();

//Paso 2: Crear el provider para proveer el contexto PROVEE ACCESO AL CONTEXTO
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
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
