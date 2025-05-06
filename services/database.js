const mongoose = require('mongoose');
require('dotenv').config(); 

class Database {
    constructor() {
        this.connect();
    }

    // Método para conectar a la base de datos
    connect() {
        mongoose.connect(process.env.MONGODB_URI)

        .then(() => console.log('Conexión exitosa a base de datos postmail'))
        .catch(err => console.error('Error de configuración', err));
    }

    static obtenerConexion() {
        if (!Database.instancia) {
            Database.instancia = new Database();
        }

        return Database.instancia;
    }
}

module.exports = Database.obtenerConexion();