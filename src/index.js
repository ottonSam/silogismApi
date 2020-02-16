const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

//Iniciando a url
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
	console.log('Conectado ao mongo, mestre...')
}).catch((err) => {
	console.log('Erro ao conectar ao mongo: '+err)
});

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3001);