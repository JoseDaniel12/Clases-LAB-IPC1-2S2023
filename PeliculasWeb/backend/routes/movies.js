const express = require('express');
const fs = require('fs');
const { promisify } = require('util');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

let AppState = require('../AppState');

// Crear Pelicula 
router.post('/crearPelicula', async (req, res) => {
    let {
        nombre,
        genero,
        minutos,
        audiencia,
        descripcion,
        fechaInicio,
        fechaFin,
    } = req.body;

    const file = req.files.imagen;
    const readFileAsync = promisify(fs.readFile);
    const data = await readFileAsync(file.tempFilePath);
    const base64Image = data.toString('base64');

    const id = uuidv4();
    AppState.movies.push({
        id,
        nombre,
        genero,
        minutos,
        audiencia,
        descripcion,
        fechaInicio,
        fechaFin,
        imagen: base64Image
    })

    res.status(200).json({ id });
})

// Obtener todas las peliculas creadas
router.get('/peliculas', (_, res) => {
    const peliculas = AppState.movies;
    res.status(200).json({ peliculas });
})

// Eliminar pelicula por id
router.delete('/borrarPelicula/:id', (req, res) => {
    const { id } = req.params;
    AppState.movies = AppState.movies.filter(movie => movie.id != id);
    res.status(200).json({ id });
})

module.exports = router;