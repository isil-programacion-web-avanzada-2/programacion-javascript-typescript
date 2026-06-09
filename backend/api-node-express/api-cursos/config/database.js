const mongoose = require('mongoose');
require('dotenv').config();

async function conectarDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Base de datos conectada correctamente');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = conectarDB;