const { Model,DataTypes,Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products'; // Nombre de la Tabla

const productSchemas = {
  id:{
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER
  },
  productName:{
    field:'product_name',
    unique: true,
    type:DataTypes.STRING
  },
  price:{
    allowNull:false,
    type:DataTypes.INTEGER
  },
  decription:{
    allowNull:false,
    type:DataTypes.TEXT,
  },
  createdAt:{
    field:'created_at',
    type:DataTypes.DATE,
    defaultValue:Sequelize.NOW,
  },

}

class Product extends Model { // modelo

  static associate(model){
    this.hasMany(model.Category,{
      as:'categories',
      foreignKey:'productId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName:PRODUCT_TABLE, // nombre de la tabla
      modelName:'Product', // nombre del modelo
      timestamps:false
    }
  }
}


module.exports = { Product, productSchemas, PRODUCT_TABLE}
