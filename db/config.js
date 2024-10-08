const { config } = require('../config/config');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);

// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {  // Corrección aquí
    url:config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url:config.dbUrl,
    dialect: 'postgres',
    ssl: {
      rejectUnauthorized: false  // Permitir conexiones SSL sin verificación
    }
  },
};



