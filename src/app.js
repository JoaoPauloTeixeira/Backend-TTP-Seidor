const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();  //Método de rotas (URL)

// const Automovel = require('./models/automovel');

const index = require('./routes/index'); //Carrega rotas
const automovelRoutes = require('./routes/automovelRoutes');
const motoristaRoutes = require('./routes/automovelRoutes');

app.use(bodyParser.json());//Converte conteudo para JSON

app.use('/', index);
app.use('/automovel', automovelRoutes);
app.use('/motorista', motoristaRoutes);

module.exports = app;
