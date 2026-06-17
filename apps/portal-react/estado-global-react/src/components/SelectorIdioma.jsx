import { useContext } from "react";
import { IdiomaContexto } from "../context/IdiomaContexto";

export const SelectorIdioma = () =>{
    const {idioma, cambiarIdioma} = useContext(IdiomaContexto);

    const texto = {
        es: "El idioma actual es español",
        en: "The current language is english",
    };
    

    return(
        <section>
            <p>{texto[idioma]}</p>
            <button onClick={() => cambiarIdioma("es")}  disabled={idioma==="es"}>
                Cambiar a español
            </button>
            <button onClick={() => cambiarIdioma("en")}  disabled={idioma==="en"}>
                Change to English
            </button>
        </section>
    );
}