import { useState } from "react";
import { obtenerUsuariosConFetch } from "../api/usersFetch";

export default function FetchUsers(){


    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");


    const cargarUsuarios = async() =>{
        try {
            setCargando(true);
            setError("");
            const datos = await obtenerUsuariosConFetch();
            setUsuarios(datos);
        } catch (error) {
            setError(error.message);
            setUsuarios([]);
        }finally{
            setCargando(false);
        }
    };

    return (

        <section className="card">
            <h2>1. Usuarios con Fetch</h2>
            <p> Fetch requiere validar manualmente la respuesta correcta</p>

            <button onClick={cargarUsuarios}>Cargar usuarios con Fetch</button>

            {cargando && <p>Cargando datos ....</p>}
            {error && <p className="error"> {error}</p>}

            <ul>
                {usuarios.map((usuario) =>(
                    <li key={usuario.id}> {usuario.name} - {usuario.email}</li>
                ))}
            </ul>
        </section>
    );

}