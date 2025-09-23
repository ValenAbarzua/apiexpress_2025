const {Router} = require('express')
const {getPeliculasId} = require('../controllers/peliculas') 

const rutas = Router()

rutas.get('/:id', getPeliculasId)

module.exports = rutas

