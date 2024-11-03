// Import de dependencias y archivos
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./src/utils/database');
const harryRouter = require('./src/api/routes/harry.routes');
const routerUser = require('./src/api/routes/user.routes');
const env = require("dotenv");

env.config();

// Configuración del servidor
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.static('public')); // Sirve archivos estáticos desde la carpeta 'public'
connectDB();

// Configurar el servidor con las rutas
server.use('/', harryRouter);
server.use('/user', routerUser);
server.use('/personage', harryRouter);

// Middleware de manejo de errores
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Ejecución del servidor
const PORT = process.env.PORT || 3000; // Usa 3000 si no hay PORT definido
server.listen(PORT, () => {
    console.log(`Escuchando puerto http://localhost:${PORT}`);
});
