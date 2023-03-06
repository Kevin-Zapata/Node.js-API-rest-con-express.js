const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) =>{
  res.send('Hola mi server en express')
})
app.get('/nueva-ruta',(req, res) =>{
  res.send('Hola soy una nueva ruta')
})
app.get('/products',(req, res) =>{
  res.json([
    {name:'Product 1',
    price: 1000
  },
  {name:'Product 2',
    price: 2000
  }
  ])
})
app.get('/products/:id', (req, res)=>{
  const {id}= req.params; // Aqui buscamos identificar el id que viene desde el navegador, en este caso se lo asignamos,aqui recibimos un parametro
  res.json({
    id,
    name:'Product 2',
    price: 2000
})
})
app.get('/categories/:categoryId/products/:productsId', (req, res)=>{ // en esta parte recibimos 2 parametros en una misma url
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId
  })

})
app.listen(port, ()=>{
  console.log('Mi port '+ port)
});
