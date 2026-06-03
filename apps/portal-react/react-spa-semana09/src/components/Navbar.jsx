import {Link} from "react-router-dom";

export default function Navbar(){

    return (

        <nav>
            <Link to="/"> Inicio</Link> | { " "}
            <Link to="/about"> Acerca</Link> | { " "}
            <Link to="/usuarios">Usuarios</Link>
        </nav>
    );
}