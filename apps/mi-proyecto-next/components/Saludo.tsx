type SaludoProps = {
    nombre: string
}

export default function Saludo({nombre}: SaludoProps){
    return <h2>Hola {nombre}, bienvenido a Next.js con tu querido profesor</h2>
}