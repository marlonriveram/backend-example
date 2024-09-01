const express = require('express');
const router = express.Router(); // enrutador
const productService = require('../services/products.service');
const service = new productService();
const validatorSchema= require ('../middleware /validatorSchema');
const { createProductSchema } = require ('../schemas/schemas')

router.get('/',async (req,res,next) =>{
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }

});

router.get('/:id',async (req,res,next) =>{
  try {
    const {id} = req.params;
    const products = await service.findOne(id);
    res.json(products);
  } catch (error) {
    next(error);
  }

});



router.post('/',
  validatorSchema(createProductSchema,'body')
  ,async (req,res,next) =>{
  try {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(200).json(newProduct);
  } catch (error) {
    next(error);
  }
});


router.patch('/:id',async (req,res,next) =>{
 try {
  const{ id }= req.params;
  res.json({
    resp:`actualizar proucto con id ${id}`
  });
 } catch (error) {
    next(error);
 }
});


router.delete('/:id',async (req,res,next) =>{
  try {
    const {id} = req.params;
    res.json({
      resp:`eliminar proucto con id ${id}`
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
