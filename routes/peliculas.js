const {Router} = require('express')
const {getPeliculasId} = require('../controllers/peliculas') 
const {getPeliculasPopulares} = require('../controllers/peliculas')

const rutas = Router()

rutas.get('/:id', getPeliculasId)
rutas.get('/', getPeliculasPopulares)

module.exports = rutas

