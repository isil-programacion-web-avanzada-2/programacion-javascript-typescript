import React, { lazy, Suspense, useState } from "react";
import { formatearFecha } from "./utilidades";

const PaginaInicio = lazy(() => import('./paginas/PaginaInicio'));
const PanelUsuario = lazy(() => import('./paginas/PanelUsuario'));
const ConfiguracionAvanzada = lazy(() => import('./paginas/ConfiguracionAvanzada'));



export default function App(){

    const [Vista, setVista] = useState('inicio');


    const seleccionarVista = () => {
        if(Vista === 'inicio') return <PaginaInicio></PaginaInicio>;
        if(Vista === 'usuario') return <PanelUsuario></PanelUsuario>;
        return <ConfiguracionAvanzada></ConfiguracionAvanzada>;

    }

    return(
        <main>
            <h1>Aplicacion en React preparada para producción</h1>
            <p>{formatearFecha(new Date())}</p>
            <nav>
                <button onClick={() => setVista('inicio')}>Inicio</button>
                <button onClick={() => setVista('usuario')}>Usuario</button>
                <button onClick={() => setVista('configuracion')}>Configuracion</button>

            </nav>
            <Suspense fallback={<p>Cargando contenido...</p>} >
                {seleccionarVista()}
            </Suspense>
        </main>
    );

}