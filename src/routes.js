const express = require('express');
const routes = express.Router()
const SilogismController = require('./controllers/SilogismController')
//const ReduceController = require('./controllers/ReduceController')


routes.post('/', SilogismController.store)

module.exports = routes;