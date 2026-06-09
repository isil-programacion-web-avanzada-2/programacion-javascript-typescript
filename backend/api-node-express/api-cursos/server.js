const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const conectarDB = require('./config/database');
const routes = require('./routes/cursoRoutes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10kb' }));

async function iniciarServidor() {
  await conectarDB();

  app.use('/api', routes);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en puerto ${PORT}`);
  });
}

iniciarServidor();