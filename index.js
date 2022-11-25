const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const PORT = 3000;

let cervezas = [
    {estilo: 'Blonde', presentacion: 'botella', precio: 55},
    {estilo: 'Porter', presentacion: 'botella', precio: 60},
    {estilo: 'Mole porter', presentacion: 'botella', precio: 90},
];

server.get("/", (request, response) => {
    response.send("API V1.0");
});
server.listen(PORT, () => {
    console.log("Servidor iniciado en el puerto 3000");
});