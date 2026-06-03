import { useState } from "react";

export default function Contador(){


    const [ contador, setContador] = useState(0);

    const incrementar = () =>{
        setContador( (prev) => prev +1 );
    };

    const reiniciar = () =>{
        setContador(0);
    };


    const decrementar = () =>{
        setContador( (prev) => prev -1 );
    };

    return (
        <div>
            <h2> Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={reiniciar}>Reiniciar</button>
            <button onClick={decrementar}>Decrementar</button>

        </div>
    );

}