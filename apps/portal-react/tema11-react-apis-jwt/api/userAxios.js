import axios from "axios";

export const obtenerUsuariosConAxios = async () =>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");

    if(!Array.isArray(data)){
        throw new Error("La respuesta no es una lista de usuarios");
    }
    return data;
    
}