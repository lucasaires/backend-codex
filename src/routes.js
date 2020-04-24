const express = require('express');
const itensController = require('./controllers/itensController');
const searchItemController = require('./controllers/searchItemController');
const authController = require('./controllers/authController');
const authMiddleware = require('./middlewares/auth');
const multer = require('multer');
const multerConfig = require('./config/multer')

const routes = express.Router();

routes.get('/', (req, res) =>{
    res.json({hello: "Market"})})

routes.post('/register', authController.create);
routes.post('/authenticate',authController.authenticate);

routes.use(authMiddleware);
routes.post('/itens', itensController.create);
routes.post('/itens/upload/:itemId', multer(multerConfig).single("file"), itensController.upload);
routes.put('/itens/:itemId', itensController.update);
routes.get('/itens', itensController.index);
routes.get('/itens/category/:itemCategory', searchItemController.searchByCategory);
routes.get('/itens/item/:itemId', searchItemController.searchById);
routes.delete('/itens/:itemId', itensController.delete);





module.exports = routes;