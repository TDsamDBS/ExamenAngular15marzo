const express = require('express')

const ProductoController = require('../controllers/productoController')

var api = express.Router()

api.post('/', ProductoController.saveProductos)
api.get('/', ProductoController.getProductos)
api.get('/', ProductoController.getActiveProductos)
api.delete('/:id', ProductoController.deleteProducto)

module.exports = api
