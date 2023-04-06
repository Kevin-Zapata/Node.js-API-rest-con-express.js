const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

const {logErrors, errorHandler} = require('./middlewares/error.handler')

app.use(express.json());

app.get('/',(req, res) =>{
  res.send('Hola mi server en express')
})
app.get('/nueva-ruta',(req, res) =>{
  res.send('Hola soy una nueva ruta')
})


app.listen(port, ()=>{
  console.log('Mi port '+ port)
});
routerApi(app);
 //Tener en cuenta al momento de colocar los middleware, se deben colocar despues del router
app.use (logErrors); //Tambien el orden en que se ejecutan
app.use(errorHandler);
