var app =  require("./app.js");

var port = process.env.PORT || 8080;

(async () => {
console.log("Connection has been established successfully.");
app.listen(port, async () => {
    console.log(`listening on http://localhost:${port}`);
  });
})();

/* (() => {
    console.log('Hola, este mensaje se muestra inmediatamente.');
  })(); */

/*   (async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log('Datos recibidos:', data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  })();
 */

/* (async (nombre) => { 
//((nombre) => {
    console.log(`Hola, ${nombre}`);
})('Nath');
 */

/* const numeros = [1, 2, 3, 4];
numeros.forEach(function (numero) { //funcion anonima
  console.log(numero * 2);
});
 */
/* const saludar = function () {
    console.log('Hola, mundo!');
  };
  
  saludar(); // Hola, mundo! */


  (function () {
    console.log('Esta función se ejecuta inmediatamente');
  })();

/*
import express from "express"; 
const app = express();
app.use(express.json());

export default app; */