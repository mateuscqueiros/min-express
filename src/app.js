var express = require('express')
var dotenv = require('dotenv')
var publicRoutes = require('./routes/public/index.js')

const app = express()
dotenv.config()

const port = process.env.PORT

app.use('/movies', publicRoutes.movies)

app.get('/', (_, res) => {
  res.send('Ola mundo')
})
app.listen(port, () => {
  console.log('Servidor iniciado em: ', port)
})
