import { useState } from "react";
import { IdiomaContexto } from "./IdiomaContexto";

export const IdiomaProvider = ({children}) =>{


    const [idioma, setIdiomna ]= useState("es");

    const cambiarIdioma = (nuevoIdioma) =>{
        setIdiomna(nuevoIdioma);
    };

    return(
        <IdiomaContexto.Provider value={{idioma, cambiarIdioma}}>
            {children}
        </IdiomaContexto.Provider>
    );
}