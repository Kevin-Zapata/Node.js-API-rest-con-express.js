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
router.get('/:id', (req, res)=>{// Todos los parametros recibidos aqui pasan hacer un string
  const {id}= req.params; // Aqui busca mos identificar el id que viene desde el navegador, en este caso se lo asignamos,aqui recibimos un parametro
  if (id === '999'){ //Tener en cuenta los ''
  res.status(404).json({
   message:"not found"
});
} else {
  res.status(200).json({
  id,
  name:'Product 2',
  price: 2000
  });
  }
});

router.get('/categories/:categoryId/products/:productsId', (req, res)=>{ // en esta parte recibimos 2 parametros en una misma url
  const { categoryId, productsId } = req.params;

    res.json({
      message:"not found"
    })

  res.json({
    categoryId,
    productsId
  });

});
router.post('/', (req, res)=>{
  const body = req.body
  res.status(201).json({
    message: 'created',
    data: body
  });
})
router.patch('/:id', (req, res)=>{
  const{ id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id
  });
})
router.delete('/:id', (req, res)=>{
  const{ id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
})
module.exports = router;
