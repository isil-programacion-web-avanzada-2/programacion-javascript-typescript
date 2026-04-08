function calcularTotal(productos){

    let total = 0;

    for (let index = 0; index < productos.length; index++) {
        const precio = productos[index].precio;
        total += precio;
    }

    return total;
}

const carrito = [
    {nombre: 'Laptop', precio: 2500},
    {nombre: 'Mouse', precio: 80}
];


console.log("Total a pagar en S/:" + calcularTotal(carrito));