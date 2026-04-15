async function get<T>(url: string): Promise<T>{

    const response = await fetch(url);
    return response.json();
}


interface Usuario{
    id: string,
    name: string
}

async function main(): Promise<void>{
    const usuarios = await get<Usuario[]>("https://jsonplaceholder.typicode.com/users");
   /* usuarios.forEach(element => {
        console.log(`ID: ${element.id} -  Nombre: ${element.name}`)
    });*/
   console.log(usuarios);
}

main();



