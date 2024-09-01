const express = require('express');
const router = express.Router(); // enrutador
const { createCategorySchema } = require('../schemas/schemas');
const categoryService = require('../services/categories.service');
const validatorSchema = require('../middleware /validatorSchema');
const service = new categoryService();


router.get('/',async (req,res,next) =>{

  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});


router.get('/:id',async (req,res,next) =>{

  try {
    const {id} = req.params;
    res.json({
      resp:`Categoria con el id = ${id}`
    });
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorSchema(createCategorySchema,'body')
  ,async (req,res,next) =>{
  try {
    const body = req.body;
    const newCategory = await service.create(body);
    res.json(newCategory);
  } catch (error) {
    next(error);
  }
});


router.patch('/:id',async (req,res,next) =>{

  try {
    const {id} = req.params;
    res.json({
      resp:`actualizar categoria con id ${id}`
    });
  } catch (error) {
    next(error);
  }
});


router.delete('/:id',async (req,res,next) =>{

  try {
    const {id} = req.params;
    res.json({
      resp:`eliminar categoria con id ${id}`
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
