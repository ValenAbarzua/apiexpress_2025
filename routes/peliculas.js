const {Router} = require('express')
const {getPeliculasTitulo} = require('../controllers/peliculas')
const {getPeliculasId} = require('../controllers/peliculas') 
const {getPeliculasPopulares} = require('../controllers/peliculas')
const {getPeliculasGenero} = require('../controllers/peliculas')
const {getGeneros} = require('../controllers/peliculas')

const rutas = Router()

rutas.get('/search', getPeliculasTitulo)
rutas.get('/genre', getPeliculasGenero)
rutas.get('/genres', getGeneros)
rutas.get('/', getPeliculasPopulares)
rutas.get('/:id', getPeliculasId)




module.exports = rutas

