const express = require('express');
const productsRouter = require('./productsRouter')
const userRouter = require('./userRouter')
function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
router.use('/user',userRouter);
router.use('/products',productsRouter); //Tener en cuenta que aqui no llamamos archivos ponemos la ruta como tal, no un archivo.
}
module.exports = routerApi;
