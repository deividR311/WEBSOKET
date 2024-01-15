const BaseController = require("./baseController");

class VehicleController extends BaseController {
    constructor() {
        super();
    }

    createVehicle = async (body) => {
        console.log(body);
        try {
            console.log('Cliente conectado', socket.id );

            socket.on('disconnect', () => {
                console.log('Cliente desconectado', socket.id );
            });
        
            socket.on('enviar-mensaje', ( payload, callback ) => {
                const id = 123456789;
                callback( id );

                socket.broadcast.emit('enviar-mensaje', payload );
        
            });
            return body;
        }
        catch (err) {
            throw err;
        }
    }

    getVehicle = async () => {
        try {
            this.io.on('vehicle', (payload) => {
                console.log(payload)
                return payload;
            })
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = VehicleController;