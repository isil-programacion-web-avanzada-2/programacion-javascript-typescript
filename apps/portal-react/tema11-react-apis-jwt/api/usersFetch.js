export const obtenerUsuariosConFetch = async() =>{
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    

    if(!respuesta.ok){
        throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    if(!Array.isArray(datos)){
        throw new Error("La respuesta no es una lista de usuarios");
    }

    return datos;

};