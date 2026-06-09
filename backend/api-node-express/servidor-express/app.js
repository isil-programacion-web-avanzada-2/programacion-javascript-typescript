
const { ok } = require("assert");
const { CONNREFUSED } = require("dns");
const { create } = require("domain");
const express = require("express");
const app = express();


app.listen(3001, ()=>{
    console.log("Querido profesor el servidor esta escuchando en http://localhost:3001");
});


app.use(express.json());
app.use((req, res, next) =>{
    console.log(`Ruta solicitada: ${req.url}`);
    next();
});

app.get('/', (req, res) =>{
    res.send("Bienvenido querido profesor a express");
});

const fs = require ("fs");


app.get("/productos", (req,res) =>{
    const data = fs.readFileSync('./productos.json');
    res.json(JSON.parse(data));
});

app.post("/productos", (req, res) =>{
    const nuevo = req.body;
    const data =JSON.parse(fs.readFileSync('./productos.json'));
    data.push(nuevo);
    fs.writeFileSync("./productos.json", JSON.stringify(data));
    res.status(201).send("Producto agregado querido profesor");
});


app.put("/productos/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const nuevoDatos = req.body;
    let data = JSON.parse(fs.readFileSync("./productos.json"));
    data = data.map( p => p.id ===id?{...p, ...nuevoDatos} :p);
    fs.writeFileSync("./productos.json", JSON.stringify(data));
    res.send("Producto actualizado querido profesor")
});



app.delete("/productos/:id", (req,res) =>{
    const id = parseInt(req.params.id);
    let data = JSON.parse(fs.readFileSync("./productos.json"));
    data = data.filter(p=> p.id !== id);
    fs.writeFileSync("./productos.json", JSON.stringify(data));
    res.send("Producto eliminado queridisimo profesor");
})