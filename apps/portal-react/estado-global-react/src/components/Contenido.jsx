import { useContext } from "react";
import { TemaContexto } from "../context/TemaContexto";
import { BotonTema } from "./BotonTema";

export const Contenido = () => {
  const { temaOscuro } = useContext(TemaContexto);

  return (
    <main className={temaOscuro ? "fondo-oscuro" : "fondo-claro"}>
      <h1>Práctica de Context API</h1>
      <BotonTema />
    </main>
  );
};