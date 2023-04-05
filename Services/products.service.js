const faker = require('faker');
class ProductsService {
constructor(){ //Esto es un array en memoria
  this.products =[];
  this.generate();
}
async generate(){
  const limit =  100; // el || seria una condicional si size no tiene nada entonces por defecto le damos 10
  for (let index = 0; index < limit; index++){
    this.products.push({
      id:  faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),

        });
      }
}
async create(data){
  const newProduct = {
    id:  faker.datatype.uuid(),
    ...data
  }
  this.products.push(newProduct);
  return newProduct;

}
 find(){
  return new  Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve (this.products);
    }, 5000);
  })

}
async findOne(id){
return this.products.find(item =>item.id === id )
}
async update(id, changes){
const index = this.products.findIndex(item =>item.id === id ) //Obtiene la posicion dentro del array
if(index === -1){
  throw new Error('Product not found');
}
const product = this.products[index];
this.products[index] ={
  ...product,
  ...changes
};
return this.products[index];
}

async deletee(id){
  const index = this.products.findIndex(item =>item.id === id ); //Obtiene la posicion dentro del array
  if(index === -1){ // es menos -1 porque cuando no encuentra dicho ID genera un -1 indicando que es un error
    throw new Error('Product not found')
  }
  this.products.splice(index, 1);
  return{ id };
}
}
module.exports = ProductsService;
