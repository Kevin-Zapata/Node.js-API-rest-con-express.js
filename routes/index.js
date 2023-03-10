const productsRouter = require('./productsRouter')
const userRouter = require('./userRouter')
function routerApi(app){
app.use('/user',userRouter);
app.use('/products',productsRouter); //Tener en cuenta que aqui no llamamos archivos ponemos la ruta como tal, no un archivo.
}
module.exports = routerApi;
