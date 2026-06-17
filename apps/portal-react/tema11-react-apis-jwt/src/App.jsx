import FetchUsers from "../components/FetchUsers";
import AxiosUsers from "../components/AxiosUsers";
import LoginJwt from "../components/LoginJwt";
export default function App(){

  return(
    <main className="container">
      <h1>Tema 11: React + APIS + JWT</h1>
      <p>
        Practica guiada usando Fetch, Axios y manejo de errores.
        Validaciones que usaremos con la sesion y JWT
      </p>
      <FetchUsers></FetchUsers>
      <AxiosUsers></AxiosUsers>
      <LoginJwt></LoginJwt>
    </main>
  );

}