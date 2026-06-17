import { createContext } from "react";

export const IdiomaContexto = createContext({
    idioma: "es",
    cambiarIdioma: () => {},
});