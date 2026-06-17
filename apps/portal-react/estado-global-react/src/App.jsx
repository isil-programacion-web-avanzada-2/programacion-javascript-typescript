
import "./App.css";

import { TemaProvider } from "./context/TemaProvider";
import { Contenido } from "./components/Contenido";
import { IdiomaProvider } from "./context/IdiomaProvider";
import { SelectorIdioma } from "./components/SelectorIdioma";
import { ContadorRedux } from "./components/ContadorRedux";

export default function App() {
   
  return (
    <>
      <TemaProvider>
        <Contenido></Contenido>
      </TemaProvider>
      <IdiomaProvider>
        <main>
          <h1>Cambio de idioma</h1>
          <SelectorIdioma />
        </main>
      </IdiomaProvider>


      <ContadorRedux></ContadorRedux>

    </>
    
  );
}

