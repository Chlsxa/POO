const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    descripcion: String,
    peso: Number,
    bultos: Number,
    fecha_entrega: Date,
});

module.exports = mongoose.model('Producto', productoSchema);