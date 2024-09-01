const Boom = require('@hapi/boom');
const { models } = require('../sequelize/sequelize')


class Products {
  constructor(){

  }

  async create(data){
    const newpr = await models.Product.create(data)
    return newpr;
  };

  async find () {
    // throw new Error("ESTO ES UN ERROR DE PRUEBA");
   
    const products = await models.Product.findAll()
    return products;
  };

  async findOne (id) {
    if(id){
      throw Boom.notFound('este erro se daria si el id = ' + id +' no existiera');
    }
      return {resp:`el producto buscado tiene este id = ${id}`};
  };

  async update (body) {
    return body;
  };

  async delete () {
      return [];
  };
};

module.exports = Products;
