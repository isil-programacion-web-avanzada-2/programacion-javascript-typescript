const producto = {
    id: 101,
    nombre: "Celular",
    precio: 1000,
    detalle: {
        marca: "LG",
        garantia: "1 año"
    }
};

const {nombre,precio, detalle: {marca} } = producto;

console.log(`Producto: ${nombre}`);
console.log(`Precio: ${precio}`);
console.log(`Marca: ${marca}`);

