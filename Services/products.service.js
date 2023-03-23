const faker = require('faker');
class ProductsService {
constructor(){
  this.products =[];
  this.generate();
}
generate(){
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
create(){

}
find(){
  return this.products;
}
findOne(id){
return this.products.find(item =>item.id === id )
}
update(){

}

deletee(){

}
}
module.exports = ProductsService;
