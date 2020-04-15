const express = require('express');
const itensController = require('./controllers/itensController')
const sessionController = require('./controllers/sessionController')
const managerController = require('./controllers/managerController')

const routes = express.Router();

routes.post('/itens', itensController.create);

routes.get('/itens', itensController.index);
routes.delete('/itens/:id', itensController.delete);

routes.post('/manager', managerController.create);

routes.post('/login', sessionController.create );


module.exports = routes;