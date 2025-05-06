const mongoose = require('mongoose');
const envioSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    nombre: String,
    direccion: String,
    telefono: String,
    referencia: String,
    fecha_creacion:{type: Date, default: Date.now},
    producto:{
        type: mongoose.Schema.Types.Mixed,
        require: true
    },
    costo: Number,
});
module.exports = mongoose.model('Envio', envioSchema);