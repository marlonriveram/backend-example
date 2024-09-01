const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setUpModel = require('../db/models')
const USER = encodeURI(config.dbUser);
const PASSWORD = encodeURI(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI,{
  dialect:'postgres', // indica el tipo de base de datos que se usara
  logging:false,
});

setUpModel(sequelize); // se importa la funcion con la inicializacion de los modelos
module.exports = sequelize;
