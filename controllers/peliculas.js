const axios= require('axios')
const { request, response} = require('express')
const URL = process.env.URL_API

//Buscar pelicula por su ID
const getPeliculasId = (req = request, res= response) => {
    const {id} = req.params
    axios.get(`${URL}/movie/${id}?api_key=${process.env.API_KEY}&language=es-ES`)
    .then((response) => {
        const data = response.data

        res.status(200).json({
            msg: 'Ok',
            code: 200,
            data
        })
    })
    .catch((e) => {
        res.status(500).json({
            msg: `Error: ${e}`,
            code: 500
        })
    })
}

//Listado de peliculas
const getPeliculasPopulares = (req = request, res = response) => {
    const {page=1} = req.query
    const params = new URLSearchParams ()
    params.append('api_key', process.env.API_KEY)
    params.append('language', 'es-ES')
    params.append('page', page)

    const url = `${URL}/movie/popular?${params.toString()}`
    axios.get(url)
    .then((response) => {
        const data = response.data.results

        res.status(200).json({
            msg: 'Ok',
            code: 200,
            data
        })
    })
    .catch((e) => {
        res.status(500).json({
            msg: `Error: ${e}`,
            code: 500
        })
    })

}

//Buscar pelicula por su titulo
const getPeliculasTitulo = (req = request, res = response) => {
    const {query = ''} = req.query
    if (!query) {
        return res.status(400).json({
            msg: 'Tienes que enviar un parametro ?query= ',
            code: 400
        })
    }

    const params = new URLSearchParams()
    params.append('api_key', process.env.API_KEY)
    params.append('language', 'es-ES')
    params.append('query', query)

    const url = `${URL}/search/movie?${params.toString()}`

    axios.get(url)
    .then((response) => {
        const data = response.data.results

        res.status(200).json({
            msg: 'Ok',
            code: 200,
            data
        })
    })
    .catch((e) => {
        res.status(500).json({
            msg: `Error: ${e}`,
            code: 500
        })
    })

}

module.exports = {
    getPeliculasId,
    getPeliculasPopulares,
    getPeliculasTitulo
}
