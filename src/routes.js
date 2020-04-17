const express = require('express');
const itensController = require('./controllers/itensController');
const searchItemController = require('./controllers/searchItemController');
const authController = require('./controllers/authController');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/register', authController.create);
routes.post('/authenticate',authController.authenticate);

routes.use(authMiddleware);
routes.post('/itens', itensController.create);
routes.put('/itens', itensController.update);
routes.get('/itens', itensController.index);
routes.get('/item/search', searchItemController.searchByCategory);
routes.delete('/itens/:id', itensController.delete);





module.exports = routes;