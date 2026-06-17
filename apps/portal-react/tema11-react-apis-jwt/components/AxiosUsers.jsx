import { useState } from "react";
import { obtenerUsuariosConAxios } from "../api/userAxios";

export default function AxiosUsers(){

    
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");

    const cargarUsuarios = async() =>{
        try {
            setCargando(true);
            setError("");
            const datos = await obtenerUsuariosConAxios();
            setUsuarios(datos);
        } catch (error) {
            
            const mensaje = error.response? `Error del servidor ${error.response.status}` : error.message;
            setError(mensaje);
            setUsuarios([]);
        }finally{
            setCargando(false);
        }
    };

     return (

        <section className="card">
            <h2>2. Usuarios con Axios</h2>
            <p> Axios simplifica la lectura de datos usando la propiedad data</p>

            <button onClick={cargarUsuarios}>Cargar usuarios con Axios</button>

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