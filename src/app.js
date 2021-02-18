const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();  //Método de rotas (URL)

// const Automovel = require('./models/automovel');

const index = require('./routes/index'); //Carrega rotas
const automovelRoutes = require('./routes/automovelRoutes');
const motoristaRoutes = require('./routes/motoristaRoutes');
const aluguelRoutes = require('./routes/aluguelAutomovelRoutes');

app.use(bodyParser.json());//Converte conteudo para JSON

app.use('/', index);
app.use('/motorista', motoristaRoutes);
app.use('/automovel', automovelRoutes);
app.use('/aluguel', aluguelRoutes);

module.exports = app;
