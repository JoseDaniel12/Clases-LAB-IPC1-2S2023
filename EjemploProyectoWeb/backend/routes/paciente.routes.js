const express = require('express');
const AppData = require('../AppData');

const router = express.Router();

router.get('/stockMedicinas', (req, res) => {
    const medicinas = AppData.medicinas.filter(medicina => {
        return medicina.cantDisponible > 0;
    });

    return res.status(200).json({ medicinas });
})

module.exports = router;