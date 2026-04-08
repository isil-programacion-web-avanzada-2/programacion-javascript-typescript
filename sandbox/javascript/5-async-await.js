async function obtenerPersonajes(id){


    try {
        
        const respuesta = await fetch("https://dragonball-api.com/api/characters");
        const datos = await respuesta.json();

        console.log("Primer personaje de dragon ball es: ", datos.items[id].name);
    } catch (error) {
        console.log("Error en la consulta: ", error);
    }
}


obtenerPersonajes(100);