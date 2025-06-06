const express = require('express');
const cartRoute = require('./src/routes/cartRoute.js')
const cartItemRoute = require('./src/routes/cartItemRoute.js')
const userRoute = require('./src/routes/userRoute.js')
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

app.use('/v1/cart', cartRoute)
app.use('/v1/item', cartItemRoute)
app.use('/v1/user', userRoute)

app.listen(port, () => {
    console.log(`Servidor rodando na url http://localhost:${port}`)
})

