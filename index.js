const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/',(req, res) =>{
  res.send('Hola mi server en express')
})
app.get('/nueva-ruta',(req, res) =>{
  res.send('Hola soy una nueva ruta')
})
app.get('/products',(req, res) =>{
  const products = [];
  const {size} = req.query;
  const limit = size || 10; // el || seria una condicional si size no tiene nada entonces por defecto le damos 10
  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),

        });
      }
        res.json(products);



  // res.json([
  //   {name:'Product 1',
  //   price: 1000
  // },
  // {name:'Product 2',
  //   price: 2000
  // }
  // ])
})

app.get ('/products/filter', (req,res)=>{ //Aquio con el /filter puesto de esta manera lo toma como un parametro y no com una ruta diferente por lo cual el id del de codigo de arriba queda como filter y el nombre del proudcto: producto 2
  res.send('Yo soy un filter');
});
// Tener en cuenta si tengo una ruta /products/<cualquiercosa> y antes de eso tengo un /products/:id lo tomara como parametro debe colocar el :id despues del de la ruta especifica para que no pase el error.
app.get('/products/:id', (req, res)=>{
  const {id}= req.params; // Aqui buscamos identificar el id que viene desde el navegador, en este caso se lo asignamos,aqui recibimos un parametro
  res.json({
    id,
    name:'Product 2',
    price: 2000
});
});

app.get('/categories/:categoryId/products/:productsId', (req, res)=>{ // en esta parte recibimos 2 parametros en una misma url
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId
  })

})
app.get ('/users', (req, res)=>{
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
})
app.listen(port, ()=>{
  console.log('Mi port '+ port)
});
