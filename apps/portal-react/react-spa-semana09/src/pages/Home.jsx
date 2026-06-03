import TarjetaCurso from "./../components/TarjetaCurso";
import Contador from "./../components/Contador";
import Usuarios from "./../components/Usuarios";

export default function Home(){
    return(
        <>
            <TarjetaCurso curso="Programando con  mi querido profesor"></TarjetaCurso>
            <Contador></Contador>
        </>
    )
    ;
}