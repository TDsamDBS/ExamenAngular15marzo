const mongoose = require('mongoose')

let Schema = mongoose.Schema

let ProductoSchema = Schema(
    {
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
        precio: { type: Number, required: true },
        fecha: { type: Date, required: true },
        activo: { type: Boolean, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)




module.exports = mongoose.model('Producto', ProductoSchema)
