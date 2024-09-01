const { isBoom, Boom } = require("@hapi/boom");
const { ValidationError } = require('sequelize')

function errorValidator (err,req,res,next) {
  res.status(500).json({
    message:err.message,
    stack:err.stack,
  });
};

function errorBoom (err,req,res,next) {
  if(err.isBoom){
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
  };
  next(err);
};

function ErrorSequelize (err,req,res,next){
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode:409,
      message:err.name,
      errors:err.errors
    })
  }
}

module.exports = { errorValidator,errorBoom,ErrorSequelize };
