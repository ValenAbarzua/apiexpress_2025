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
module.exports = {
    getPeliculasId
}
