const { error } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const URI = 'mongodb+srv://Admin:DefaultPassword@serveradote.fbcdvgq.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())

app.post('/cadastrar', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});


app.listen(3000, () => {
  console.log('App está rodando')
});

mongoose.connect(URI).then(() => {
  listenPort();
  console.log('Conectado ao mongoDB')
}).catch(() => {
  console.log(error)
});


