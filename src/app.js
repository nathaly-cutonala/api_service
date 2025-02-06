var express = require('express') //llamamos a Express
var app = express();              

app.use(express.json());

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Mi primer servicio!' })   
})

app.get('/drink', function(req, res) {
  res.json({ mensaje: '¡Debes tomar 2 litros de agua!' })  
});

app.get('/multiplicar', (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
      return res.status(400).send('Missing params');
  }

  const resultado = parseInt(num1) * parseInt(num2);
  res.send(`El resultado de multiplicar ${num1} por ${num2} es ${resultado}`);
  
});

app.get('/suma', (req, res) => {
  const { num1, num2 } = req.query;
  const suma = parseInt(num1) + parseInt(num2);
  res.send(`La suma de ${num1} y ${num2} es ${suma}`);
});

/*app.get('/usuario', (req, res) => {
  const usuario = {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan@example.com'
  };
  res.json(usuario);
});
*/

app.post('/', function(req, res) {

  //const name = req.body.name;

  res.json({ data: req.body })   
})

app.del('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})
module.exports = app;
// iniciamos nuestro servidor
/* app.listen(port)
console.log('API escuchando en el puerto ' + port) */