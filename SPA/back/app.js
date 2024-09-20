const express = require('express')
const bodyParser = require('body-parser')
const AnimalsRoutes = require('./router/AnimalsRoute')
const cors = require('cors')

const app = express();

const PORT = 3000;

app.use(cors())
app.use(bodyParser.json())
app.use('/animal', AnimalsRoutes)


app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
});