function obtenerUsuario(id){
    return new Promise((resolve, reject) =>{
        console.log("Consultando datos");
        setTimeout(() =>{
            const usuarios = {
                1: {nombre: "Wilder", edad: 18},
                2: {nombre: "Jorge", edad: 20}
            };
            const usuario = usuarios[id]
            if(usuario){
                resolve(usuario);
            }else{
                reject("Usuario no existe");
            }
        }, 2000)
    })
}

obtenerUsuario(3)
    .then(user => console.log(`USuario: ${user.nombre}, Edad: ${user.edad}`))
    .catch(error => console.error("Error ", error))
    .finally(()=>console.log("Consulta finaliza"));