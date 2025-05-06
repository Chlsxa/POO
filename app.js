const express = require("express");
const Usuario = require("./models/usuarios");
const Envio = require("./models/envio");
const Producto = require("./models/producto");
require("./services/database"); // Conexión a la base de datos
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => console.log(`Servidor corriendo exitosamente en puerto ${port}`));

//verificar prueba de la API
app.get("/", (req, res) => {
    res.send("API de PostMail funcionando!");
});


app.get("/usuarios", async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});


app.post("/usuario", async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json(usuario);
    } catch (err) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }
});

app.get("/usuario/:id/credito", async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.json({ creditos_disponibles: usuario.credito });
    } catch (err) {
        res.status(500).json({ error: "Error al obtener el crédito" });
    }
});

//ENVIOS
app.get("/envios", async (req, res) => {
    try {
        const envios = await Envio.find(); // Obtiene todos los envíos
        if (envios.length === 0) {
            return res.status(404).json({ error: "No hay envíos registrados" });
        }
        res.json(envios);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener envíos" });
    }
});

app.post("/envios", async (req, res) => {
    try {
        const envio = new Envio(req.body);
        const usuario = await Usuario.findById(envio.usuarioId);

        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
        if (usuario.credito <= 0) return res.status(400).json({ error: "No tienes crédito suficiente" });

        usuario.credito -= 1;
        await usuario.save();
        await envio.save();

        res.status(201).json(envio);
    } catch (err) {
        res.status(500).json({ error: "Error al registrar el envío" });
    }
});

//info del producto dentro del envío
app.get("/envios/:id/producto", async (req, res) => {
    try {
        const envio = await Envio.findById(req.params.id);
        if (!envio) return res.status(404).json({ error: "Envío no encontrado" });

        if (!envio.producto) return res.status(404).json({ error: "Este envío no tiene un producto asociado" });

        res.json(envio.producto);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener el producto del envío" });
    }
});

app.post("/envios/:id/producto", async (req, res) => {
    try {
        const envio = await Envio.findById(req.params.id);
        if (!envio) return res.status(404).json({ error: "Envío no encontrado" });

        
        envio.producto = req.body || {}; 

        if (envio.producto.peso) { 
            const precioBase = 5;
            let extra = Math.floor(envio.producto.peso / 3);
            envio.costo = extra * precioBase;
        }

        await envio.save();
        res.json(envio);
    } catch (err) {
        res.status(500).json({ error: "Error al agregar el producto" });
    }
});

//PRODUCTOS
app.get("/productos", async (req, res) => {
    try {
        const productos = await Producto.find();
        if (productos.length === 0) {
            return res.status(404).json({ error: "No hay productos registrados" });
        }
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

app.post("/productos", async (req, res) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.status(201).json(producto);
    } catch (err) {
        res.status(500).json({ error: "Error al registrar el producto" });
    }
});

//consulta de los envios por el id
app.get("/envios/:id", async (req, res) => {
    try {
        const envios = await Envio.find({ usuarioId: req.params.id });
        if (envios.length === 0) {
            return res.status(404).json({ error: "No hay envíos registrados para este usuario" });
        }
        res.json(envios);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener envíos" });
    }
});

//elimina el envio y restaura de un vez el credito
app.delete("/envios/:id", async (req, res) => {
    try {
        const envio = await Envio.findByIdAndDelete(req.params.id);
        if (!envio) return res.status(404).json({ error: "Envío no encontrado" });

        const usuario = await Usuario.findById(envio.usuarioId);
        if (usuario) {
            usuario.credito += 1;
            await usuario.save();
        }

        res.json({ mensaje: "Envío eliminado y crédito restaurado" });
    } catch (err) {
        res.status(500).json({ error: "Error al eliminar el envío" });
    }
});