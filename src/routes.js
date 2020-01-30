const { Router } = require('express');
const SilogismController = require('./controllers/SilogismController')

const routes = Router();

routes.post('/silogism', SilogismController.store); 

module.exports = routes;