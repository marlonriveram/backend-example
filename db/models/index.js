const { Product,productSchemas} = require('./products.model');
const { Category,categorySchemas } = require('./category.model');


function setUpModel(sequelize) {
  Product.init(productSchemas,Product.config(sequelize)); //inicializar los modelos
  Category.init(categorySchemas,Category.config(sequelize)); //inicializar los modelos

  Category.associate(sequelize.models); // asosiaciones
  Product.associate(sequelize.models); // asosiaciones
};

module.exports = setUpModel;
