
 const options ={
  method:'GET',
  headers:{
    'Content-Type':'application/json'
  }
 }

fetch('http://localhost:3001/v1/products',options)
.then(response => response.json())
.then(date => console.log(date));
