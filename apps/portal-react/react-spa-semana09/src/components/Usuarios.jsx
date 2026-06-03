import { useEffect, useState } from "react";

export default function Usuarios(){

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{
        async function cargaDatos(){
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();

            setUsuarios(data);
        }

        cargaDatos();
    }, []);

    return (
        <div>
            <h2>Lista de usuario</h2>
            <ul>
                { usuarios.map((u)=>(
                    <li key={u.id}> {u.name}</li>
                ))}
            </ul>
        </div>
    );
}