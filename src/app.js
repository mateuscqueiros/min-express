var express = require('express');
var dotenv = require('dotenv');
var publicRoutes = require('./routes/public');
const users = require('./models/users');
const db = require('./db');
const dbUtils = require('./db/utils');

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use('/movies', publicRoutes.movies);
app.use('/users', publicRoutes.users);

app.get('/', async (_, res) => {
  res.json({ message: 'Rota principal' });
});

dbUtils.setup(db);

app.listen(port, () => {
  console.log('Servidor iniciado em: ', port);
});
