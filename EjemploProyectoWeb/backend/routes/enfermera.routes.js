const express = require('express');
const { v4: uuidv4 } = require("uuid");
const AppData = require('../AppData');

const router = express.Router();

// Agregar medicina
router.post('/cargarMedicina', (req, res) => {
    const { nombre } = req.body;
    for (let medicina of AppData.medicinas) {
        if (medicina.nombre === nombre) {
            return res.status(400).json({ error: `El nombre \'${nombre}\' ya esta registrado.` });
        }
    }

    const idMedicina = uuidv4();
    AppData.medicinas.push({
        idMedicina,
        ...req.body
    })
    return res.status(200).json({ medicinas: AppData.medicinas });
})

// Eliminar Medicina
router.delete('/eliminarMedicina/:id', (req, res) => {
    const idMedicina = req.params.id;
    AppData.medicinas = AppData.medicinas.filter(medicina => {
        return medicina.idMedicina !== idMedicina;
    })
    return res.status(200).json({ medicinas: AppData.medicinas });
})


// Actualizar Medicina
router.put('/actualizarMedicina', (req, res) => {
    const { idMedicina, nombre, descripcion, precio, cantDisponible } = req.body;
    let medicina = AppData.medicinas.find(medicina => medicina.idMedicina === idMedicina);
    if (!medicina) {
        return res.status(400).json({ error: 'No se encontro la medicina.' })
    }

    const nombreRepetido = AppData.medicinas.some(medicina => medicina.nombre === nombre && medicina.idMedicina !== idMedicina);
    if (nombreRepetido) {
        return res.status(400).json({ error: 'Ya existe una medicina con ese nombre.' })
    }

    medicina.nombre = nombre;
    medicina.descripcion = descripcion;
    medicina.precio = precio;
    medicina.cantDisponible = cantDisponible;

    return res.status(200).json({ medicina });
})

module.exports = router;