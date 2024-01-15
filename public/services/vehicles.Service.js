const BaseService = require('./base.service');
const VehicleController = require('../controllers/vehicles.Controller');
const Server = require('../classes/server');
const appServer = Server;

class VehicleService extends BaseService {
    constructor() {
        super();
        this.vehicleController = new VehicleController;
    }

    createVehicle = async (req, res) => {
        try {
            const { body } = req;
            console.log(body);
            console.log('Cliente conectado', appServer.io.id );

        appServer.io.id.on('disconnect', () => {
            console.log('Cliente desconectado vehicles', appServer.io.id );
        });

        appServer.io.id.on('enviar-mensaje-vehicle', ( payload, callback ) => {

            const id = 123456789;
            callback( id );

            appServer.io.id.broadcast.emit('enviar-mensaje-vehicle', payload );

        })
            // let response = await this.vehicleController.createVehicle(body);
            res.status(this.httpCode.created).json({
                status: 'ok'
            });
        }
        catch (err) {
            res.status(this.httpCode.serverError).json({
                status: 'error',
                message: this.httpMessage.serverError,
                data: err
            });
        }
    }

       getAllNotification = async (req, res) => {
        try {
            let response = await this.notificationController.getAllNotification();
            res.status(this.httpCode.success).json({
                status: this.httpMessage.success,
                message: this.httpMessage.success,
                data: response
            });
        }
        catch (err) {
            res.status(this.httpCode.serverError).json({
                status: 'error',
                message: this.httpMessage.serverError,
                data: err
            });
        }
    }
}

module.exports = VehicleService;