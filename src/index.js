const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const cors = require('cors');

const app = express();
app.use(express.json());
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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

app.listen(process.env.PORT || 3001);