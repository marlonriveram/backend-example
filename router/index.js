const express = require('express');
const router = express.Router();
const productsRouter = require('./products.router');
const categoryRouter = require('./categories.router');

function routersApi (app) {
  app.use('/v1',router);
  router.use('/products',productsRouter);
  router.use('/categories',categoryRouter);
};
module.exports = {routersApi};
