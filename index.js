const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const productoRoutes = require('./routes/productoRoutes')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(helmet())
dotenv.config()

app.use('/api/producto', productoRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Bienvenido')
})

const run = async () => {
    await mongoose.connect(process.env.URL_BASEDATOS,
        { useNewUrlParser: true, useUnifiedTopology: true })
    await app.listen(process.env.PORT || 3000)
    console.log('Servidor y base de datos encendidos correctamente')
}



run().catch(error => console.log('Fallo al arrancar:' + error))