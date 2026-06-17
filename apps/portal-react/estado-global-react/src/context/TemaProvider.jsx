import { useState } from "react";
import { TemaContexto } from "./TemaContexto";

export const TemaProvider = ({ children }) => {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const alternarTema = () => {
    setTemaOscuro(!temaOscuro);
  };

  return (
    <TemaContexto.Provider value={{ temaOscuro, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};