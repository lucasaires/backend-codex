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
routes.put('/itens/:itemId', itensController.update);
routes.get('/itens', itensController.index);
routes.get('/itens/category/:itemCategory', searchItemController.searchByCategory);
routes.get('/itens/item/:itemId', searchItemController.searchById);
routes.delete('/itens/:itemId', itensController.delete);





module.exports = routes;