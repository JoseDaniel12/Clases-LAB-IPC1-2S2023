const express = require('express');
const { v4: uuidv4 } = require("uuid");
const AppData = require('../AppData');

const router = express.Router();

router.get('/stockMedicinas', (req, res) => {
    const medicinas = AppData.medicinas.filter(medicina => {
        return medicina.cantDisponible > 0;
    });

    return res.status(200).json({ medicinas });
})


// ---------------------------------- Carrito ----------------------------------

// Obtener prorductos del carrito
router.get('/obtenerMedicinasCarrito/:idUsuario', (req, res) => {
    const idUsuario = req.params.idUsuario;

    // Se Busca el carrito
    let indiceCarrito = -1;
    for (let i = 0; i < AppData.carritos.length; i++) {
        let carrito = AppData.carritos[i];
        if (carrito.idUsuario === idUsuario && carrito.registrado === false) {
            indiceCarrito = i;
        }
    }

    if (indiceCarrito === -1) {
        return res.status(400).json({ error: 'No se encontro el carrito del usuario indicado.' });
    }

    let carrito = AppData.carritos[indiceCarrito];

    // Se buscan las medicinas del carrito
    let medicinasCarrito = AppData.medicinasCarrito.filter(medicinaCarrito => {
        return medicinaCarrito.idCarrito === carrito.idCarrito;
    })

    return res.status(200).json({ medicinasCarrito });
})


// Aumentar o Disminuir cantidad de medicamento en carrito
router.put('/IncDisCantMeidicinaCarrito', (req, res) => {
    let { idCarrito, idMedicina, operacion } = req.body;

    // Se busca el carrito
    let carritos = AppData.carritos.filter(carrito => {
        return carrito.idCarrito === idCarrito;
    })

    if (!carritos) {
        return res.status(400).json({ error: 'No se encotro el carrito con ese id.' });
    }

    // Se buscan los registros que vinculan las medicinas con el carrito
    let indiceMeidicinaCarrito = -1;
    for (let i = 0; i < AppData.medicinasCarrito.length; i++) {
        let medicinaCarrito = AppData.medicinasCarrito[i];
        if (medicinaCarrito.idCarrito === idCarrito && medicinaCarrito.idMedicina === idMedicina) {
            indiceMeidicinaCarrito = i;
        }
    }
    if (indiceMeidicinaCarrito === -1) {
        return res.status(400).json({ error: 'Esa medicina no se encuentra en el carrito' });
    }
    let medicinaCarrito = AppData.medicinasCarrito[indiceMeidicinaCarrito];

    // Se busca la medicina que se quiere incrementar o decrementar en el carrito
    let [medicina] = AppData.medicinas.filter(medicina => medicina.idMedicina === idMedicina);

    // Se incrementa o decrementa la cantidad de la medicina en el carrito y se realiza
    // la operación contraria en el stock disponible de esa medicina.
    if (operacion === 'INC') {
        medicinaCarrito.cantidad++;
        medicina.cantDisponible--;
    } else {
        medicinaCarrito.cantidad--;
        medicina.cantDisponible++;
        if (medicinaCarrito.cantidad === 0) {
            AppData.medicinasCarrito.splice(indiceMeidicinaCarrito, 1);
        }
    }

    return res.status(200).json({ medicinaCarrito });
})


// Pagar Carrito
router.put('/pagarCarrito', (req, res) => {
    let { idCarrito } = req.body;

    // Se busca el carrito a comprar
    let carritos = AppData.carritos.filter(carrito => {
        return carrito.idCarrito === idCarrito;
    })

    if (!carritos) {
        return res.status(400).json({ error: 'No se encotro el carrito con ese id.' });
    }

    let carrito = carritos[0];

    // Se coloca el carrito como comprado
    carrito.registrado = true;

    // Se crea un nuevo carrito vacio para el usuario
    let fecha = new Date();
    AppData.carritos.push({
        idCarrito: uuidv4(),
        fecha: `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`,
        registrado: false,
        idUsuario: carrito.idUsuario
    })

    res.status(200).json({ carrito });
})

module.exports = router;