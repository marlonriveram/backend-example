const Joi = require('joi');

const productName = Joi.string();
const nameCategory = Joi.string();
const  productId = Joi.number().integer();
const decription = Joi.string();
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  productName:productName.required(),
  decription:decription.required(),
  price:price.required(),
});

const createCategorySchema = Joi.object({
  nameCategory:nameCategory,
  productId:productId
})

module.exports = { createProductSchema,createCategorySchema };
