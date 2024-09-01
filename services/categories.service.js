
const { models } = require('../sequelize/sequelize')
class Category {
  constructor(){

  }

  async create(data){
    const newCategory = await models.Category.create(data)
    return newCategory;
  };

  async find () {
    console.log(models.Category);
   const categories = await models.Category.findAll({include:'Product'});
    return categories;
  };

  async findOne () {
    return [];
  };

  async update () {
    return [];
  };

  async delete () {
    return [];
  };
};


module.exports = Category;
