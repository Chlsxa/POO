const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    telefono: String,
    credito: Number,
});

module.exports = mongoose.model("Usuario", usuarioSchema);