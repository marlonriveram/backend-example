const express = require('express');
const cors = require ('cors');
const {routersApi} = require('./router');
const { errorValidator,errorBoom,ErrorSequelize } = require ('./middleware /error.handler');

const app = express(); // servidor
const port = process.env.PORT || 3001;



app.use(express.json()); // Middleware para parsear cuerpos JSON
app.use(cors());

routersApi(app);

app.use(errorBoom);
app.use(ErrorSequelize);
app.use(errorValidator);

app.listen(port,() =>{
  console.log('Escuchando el puerto:',port)
});



