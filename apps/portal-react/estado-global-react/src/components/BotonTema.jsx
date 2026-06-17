import { useContext } from "react";
import { TemaContexto } from "../context/TemaContexto";


export const BotonTema = () =>{

    const {temaOscuro, alternarTema} = useContext(TemaContexto);

    return (
        <button onClick={alternarTema}>
            Tema actual: {temaOscuro? "Oscuro" : "Claro"}
        </button>
    );
}