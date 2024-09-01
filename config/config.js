require ('dotenv').config();
const config = {
  // variables de ambiente (Entorno)
  env: process.env.NODE_ENV || 'dev', // variable para saber si es entorno de desarrollo, por defecto siempre es este
  isProd: process.env.NODE_ENV === 'production', // variable para saber si esta en produccion
  port: process.env.PORT || 3001,   // puerto del que escucha mi servidor express
  dbUser: process.env.POSTGRES_USER,
  dbPassword: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB, // nombre base datos
  dbHost : process.env.POSTGRES_HOST, // host de mi db
  dbPort : process.env.POSTGRES_PORT, // puerto donde corre mi base de datos en este caso en docker compose de puso el puerto 5432
  dbUrl : process.env.DATABASE_URL,
};

module.exports = { config };
