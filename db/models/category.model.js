const { Model,DataTypes,Sequelize } = require ('sequelize');
const { PRODUCT_TABLE } = require('./products.model');

const CATEGORY_TABLE = 'categories';

const categorySchemas = {
  id:{
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
  },
  nameCategory:{
    field:'category_name',
    allowNull:false,
    type:DataTypes.STRING
  },

  productId:{
    field:'product_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
      model:PRODUCT_TABLE,
      key:'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Category extends Model{
  static associate (model){
    this.belongsTo(model.Product,{
      as:'Product',
      foreignKey:'productId'
    })
  }


  static config(sequelize){
    return{
      sequelize,
      tableName:CATEGORY_TABLE,
      modelName:'Category', // nombre del modelo
      timestamps: false,
    }
  }
};

module.exports = {Category, CATEGORY_TABLE,categorySchemas};
