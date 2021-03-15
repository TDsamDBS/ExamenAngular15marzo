let Producto = require('../models/productoSchema')

async function saveProductos(req, res) {
    const productosBody = req.body
    const producto = new Producto(productosBody)
    try {
        const productoGuardado = await producto.save()
        res.status(200).json('Producto guardado correctamente')
    } catch (error) {
        res.status(500).json('error ' + error)
    }
}

async function getProductos(req, res) {
    try {
        const productos = await Producto.find({}).exec()
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json('error ' + error)
    }
}


async function getActiveProductos(req, res) {
    try {
        const placeholder = 'esto es un placeholder'
        res.status(200).json(placeholder)
    } catch (error) {
        res.status(500).json('error ' + error)
    }
}

async function deleteProducto(req, res) {
    const productoId = req.params.id
    try {
        const productoBorrado = await Producto.findByIdAndRemove(productoId)
        res.status(200).json('Producto borrado correctamente')

    } catch (error) {
        res.status(500).json('error ' + error)
    }
}

module.exports = { saveProductos, getProductos, getActiveProductos, deleteProducto }