const express = require('express');
const cors = require('cors');

const { socketController } = require('../../sockets/controller');
const VehicleService = require('../services/vehicles.Service');




class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.paths = {};
        this.vehicleService = new VehicleService();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // READ AND CONVERT THE BODY
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {
        // socket Router
        this.app.use('/vehicle', require('../routes/vehicles.Routes'));
    }

    sockets() {
        this.io.on('connection', socketController);
        this.io.on('create', this.vehicleService.createVehicle);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;
module.exports.io = Server.io;