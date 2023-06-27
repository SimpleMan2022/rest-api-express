require('dotenv').config()

const express = require('express')
const app = express()
const userRouters = require('./routers/users')
const middlewareLogRequest = require('./middleware/logs')
const port = process.env.PORT


app.use(middlewareLogRequest)
app.use(express.json())

app.use('/users', userRouters)


app.get('/index', (req, res) => {
    res.json({
        nama : 'adit nugroho',
        msg : 'get nama success'
    })
})

app.post('/index', (req, res) => {
    res.json({
        nama : 'adit nugroho',
        msg : 'Create nama success'
    })
})

app.listen(port, ()=> {
    console.log('server menyala di port '+port)
})