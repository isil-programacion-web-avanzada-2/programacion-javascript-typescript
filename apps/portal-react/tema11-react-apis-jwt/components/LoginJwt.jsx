import { use, useState } from "react";
import { loginSimulado, refrescarTokenSimulado } from "../api/authApi";

export default function LoginJwt(){
    const [correo, setCorreo] = useState("demo@lideratec.com");
    const [clave, setClave] = useState("123456");
    const[token, setToken]= useState(localStorage.getItem("token") || "");
    const[mensaje, setMensaje] = useState("");
    const[error, setError] =  useState("");
    const iniciarSesion = async () => {
        try {
            setError("");
            setMensaje("Iniciando sesion...");

            const data = await loginSimulado({correo, clave});
            localStorage.setItem("token", data.token);
            setToken(data.token);
            setMensaje("Session iniciada y token guardado");
        } catch (error) {
            setError(error.message);
            setMensaje("");
        }
    }

    const cerrarSesion = () =>{
        localStorage.removeItem("token");
        setToken("");
        setMensaje("Session esta cerrada");
        setError("");
    }

    const renovarToken = async() =>{
        try {
            setError("");
            setMensaje("Solicitando refrescar token");
            const data = await refrescarTokenSimulado();
            localStorage.setItem("token", data.token);
            setToken(data.token);
            setMensaje("Nuevo token generado");
        } catch (error) {
            setError(error.message);
            setMensaje("");
        }
    }

    return(
        <section className="card">
            <h2>3. Login y JWT</h2>

        <div className="row">
        <input
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Correo"
        />
        <input
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          placeholder="Clave"
          type="password"
        />
      </div>

        <div className="row" style={{ marginTop: "12px" }}>
            <button onClick={iniciarSesion}>Login</button>
     <button className="secondary" onClick={renovarToken}>
          Refresh token
        </button>
            <button className="danger" onClick={cerrarSesion}>
            Logout
            </button>
        </div>

        {mensaje && <p className="success">{mensaje}</p>}
        {error && <p className="error">{error}</p>}

        <h3>Access Token actual</h3>
        <pre>{token || "Sin token"}</pre>


        </section>



    );
}