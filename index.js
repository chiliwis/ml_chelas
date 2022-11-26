const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const PORT = 3000;

let cervezas = [
    { estilo: 'Blonde', presentacion: 'botella', precio: 55 },
    { estilo: 'Porter', presentacion: 'botella', precio: 60 },
    { estilo: 'Mole porter', presentacion: 'botella', precio: 90 },
];

server.get("/", (request, response) => {
    response.send("API V1.0");
});

server.get("/cervezas", (request, response) => {
    let data_mapeada = cervezas.map((cerveza, index) => {
        return { index, ...cerveza };
    });
    response.json(
        {
            data: data_mapeada,
            count: cervezas.length,
            mensaje: "Cervezas base"
        }
    );
});

server.post("/cervezas", (request, response) => {
    const cerveza = request.body;
    if (!cerveza.nombre) {
        return response.status(400).json({ mensaje: "La cerveza debe tener un estilo" });
    }
    cervezas.push(cerveza);
    response.json(
        {
            data: cerveza,
            mensaje: "Entro a la funcion agregar cervezas"
        }
    );
});

server.put("/cervezas/:index", (request, response) => {
    const { index } = request.params;
    const cerveza = request.body;
    cervezas[index] = cerveza;
    response.json(
        {
            data: index,
            mensaje: "Se actualizo la cerveza"
        }
    );
});

server.delete("/cervezas/:index", (request, response) => {
    const { index } = request.params;
    cervezas.splice(index, 1);
    response.json(
        {
            data: index,
            mensaje: "Se elimino la cerveza"
        }
    );
});

server.listen(PORT, () => {
    console.log("Servidor iniciado en el puerto 3000");
});