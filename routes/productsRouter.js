const express = require('express');
const faker = require('faker');

const router = express.Router();
router.get('/',(req, res) =>{
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

router.get ('/filter', (req,res)=>{ //Aquio con el /filter puesto de esta manera lo toma como un parametro y no com una ruta diferente por lo cual el id del de codigo de arriba queda como filter y el nombre del proudcto: producto 2
  res.send('Yo soy un filter');
});
// Tener en cuenta si tengo una ruta /products/<cualquiercosa> y antes de eso tengo un /products/:id lo tomara como parametro debe colocar el :id despues del de la ruta especifica para que no pase el error.
router.get('/:id', (req, res)=>{
  const {id}= req.params; // Aqui buscamos identificar el id que viene desde el navegador, en este caso se lo asignamos,aqui recibimos un parametro
  res.json({
    id,
    name:'Product 2',
    price: 2000
});
});

router.get('/categories/:categoryId/products/:productsId', (req, res)=>{ // en esta parte recibimos 2 parametros en una misma url
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId
  })

})
module.exports = router;
