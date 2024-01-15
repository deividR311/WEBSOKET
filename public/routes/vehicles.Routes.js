const express = require('express');

const VehicleService = require('../services/vehicles.Service');
const vehicleService = new VehicleService;


const router = express.Router();

router.post('/sendVehicle', vehicleService.createVehicle);

module.exports = router;