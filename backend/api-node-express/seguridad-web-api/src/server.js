import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generarToken, crearHash, compararPassword } from "./auth.js";
import { verificarToken,permitirRoles } from "./middlewares.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

const usuarioDemo ={
    id: 10,
    nombre: "Querido Profesor",
    email: "querido_profesor@gmail.com",
    rol: "alumno",
    hash: crearHash("123456")
}

app.post("/login", (req, res) =>{
    const {email, password} = req.body;

    if(email !== usuarioDemo.email){
        return res.status(401).json({msg: "Credenciales Invalidas"});
    }
    const coincide = compararPassword(password, usuarioDemo.hash);
    if(!coincide){
        return res.status(401).json({msg: "Credenciales Invalidas"});
    }
    const token = generarToken(usuarioDemo);
    res.json({
        msg: "Login correcto",
        token
    });
})


app.get("/perfil", verificarToken, (req,res) =>{
    res.json({
        msg: "Bienvenido querido profesor"
    });
})

app.get("/admin/dashboard", verificarToken, permitirRoles("admin"), (req, res) =>{
    res.json({
        msg: "Bienvenido administrador querido profesor"
    });
})

const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log("Servidor iniciando");
});