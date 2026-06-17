const ACCESS_TOKEN_VALIDO = "jwt-querido-profesor-token-vaido";
const ACCESS_TOKEN_RENOVADO = "jwt-quero-profesor-token-renovado";

export const loginSimulado = async({correo, clave}) =>{
    await esperar(300);
     if( correo === 'demo@lideratec.com' && clave === '123456'){
        return{
            token: ACCESS_TOKEN_VALIDO,
            usuario: {
                nombre: "Querido profesor",
                correo,
            }
        };
     }

     throw new Error("Credenciales invalidar");
}

export const refrescarTokenSimulado = async () =>{
    await esperar(300);
    return {
        token: ACCESS_TOKEN_RENOVADO,
    };
}

const esperar = (ms) =>{
    return new Promise((resolve) => setTimeout(resolve,ms));
}