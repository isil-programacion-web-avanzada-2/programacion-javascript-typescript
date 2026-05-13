const mongoose = require('mongoose');
require('dotenv').config();

async function conectarDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Base de datos conectada correctamente");
    } catch (error) {
        console.log("Error al conectar a BD");
        process.exit(1);
    }
}


module.exports = conectarDB;