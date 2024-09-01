const { Sequelize } = require('sequelize');
const pg = require('pg');
const { config } = require('../config/config');
const setUpModel = require('../db/models')
// const USER = encodeURI(config.dbUser);
// const PASSWORD = encodeURI(config.dbPassword);

// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
  dialect:'postgres',
  logging: config.isProd ? false : true, // si esta en production el loggin de sequelize estara apagado
}

if(config.isProd){
  options.ssl = {
    rejectUnauthorized: false  // Permitir conexiones SSL sin verificación
  }
  options.dialectModule = pg
}
const sequelize = new Sequelize(config.dbUrl,options);

setUpModel(sequelize); // se importa la funcion con la inicializacion de los modelos
module.exports = sequelize;
