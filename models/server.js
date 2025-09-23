const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(cors())
    this.app.use(express.static('public'))
  }

  rutas () {
    this.app.get('/', (req, res) => res.send('Hello World!'))
    this.app.use('/api/v1/empleados', require('../routes/empleados'))
    this.app.use('/api/v1/peliculas', require('../routes/peliculas'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Api escuchando en el puerto: ${this.port}`)
    })
  }
}

module.exports = Server
