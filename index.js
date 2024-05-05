//import de dependecias y archivos
const express = require('express');
const { connectDB } = require('./src/utils/database');
const harryRouter = require(`./src/api/routes/harry.routes`);
const routerUser = require('./src/api/routes/user.routes');
const env = require("dotenv")
env.config()

// configuración del servidor
const server = express();
server.use(express.json());
connectDB();

//configurar el servidor con las rutas
server.use(`/`,harryRouter)
server.use('/user', routerUser);

//ejecucion del servidor
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Escuchando puerto http://localhost:${PORT}`);
});
