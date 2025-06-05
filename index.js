const express = require('express');
const cartRoute = require('./src/routes/cartRoute.js')
const cartItemRoute = require('./src/routes/cartItemRoute.js')

require('dotenv').config()


const app = express();
const port = process.env.PORT;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello world') 
})

app.get('/boas-vindas', (req, res) => {
   res.send('Seja bem-vindo') 
})

app.use('/v1', cartRoute)
app.use('/v2', cartItemRoute)

app.listen(port, () => {
    console.log(`Servidor rodando na url http://localhost:${port}`)
})