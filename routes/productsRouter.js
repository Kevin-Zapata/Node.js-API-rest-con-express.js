const express = require('express');
const ProductsService = require ('./../Services/products.service')

const router = express.Router();
const service = new ProductsService();
router.get('/',(req, res) =>{
 const products = service.find();
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
  const product = service.findOne(id);
  res.json(product);
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
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
})
router.patch('/:id', (req, res)=>{
  const{ id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
})
router.delete('/:id', (req, res)=>{
  const{ id } = req.params;
  const rta = service.deletee(id);
  res.json(rta);
})
module.exports = router;
