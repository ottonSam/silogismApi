const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

//Iniciando a url
mongoose.connect('mongodb+srv://silogica:!1usbw@cluster0-86qfz.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
	console.log('Conectado ao mongo, mestre...')
}).catch((err) => {
	console.log('Erro ao conectar ao mongo: '+err)
});

app.use(express.json());
app.use(routes);

app.listen(3001);