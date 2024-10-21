const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  const Objeto = {
    saludo: 'Hola Mundo',
    lista: [
      { saludo: 'Hola' },
      { saludo: 'Mundo' }
    ]
  };
  res.json(Objeto);
});

app.get('/hola', (req, res) => {
  res.send('Adios!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});