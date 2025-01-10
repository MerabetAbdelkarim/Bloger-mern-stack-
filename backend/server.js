require('./config/connect')

const acticleRoute = require('./routes/article')
const authorRoute = require('./routes/author')
const cors = require('cors')

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use('/article', acticleRoute)
app.use('/author', authorRoute)


app.use('/getimagearticle', express.static('./uploads/article'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})