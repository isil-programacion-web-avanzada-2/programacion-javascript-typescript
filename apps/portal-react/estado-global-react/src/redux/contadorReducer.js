const estadoInicial = {contador : 0};

export function contadorReducer(state= estadoInicial, action){
    switch(action.type){
        case "INCREMENTAR":
            return {contador: state.contador + 1};
        case "DISMINUIR":
            return {contador: state.contador - 1};
        default:
            return state;
    }
       
}