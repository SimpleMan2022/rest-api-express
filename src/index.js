require('dotenv').config()

const express = require('express')
const app = express()
const userRouters = require('./routers/users')
const middlewareLogRequest = require('./middleware/logs')
const upload = require('./middleware/multer')
const port = process.env.PORT


app.use(middlewareLogRequest)
app.use(express.json())
app.use('/assets',express.static('public/images'))

app.use('/users', userRouters)
app.post('/upload', upload.single('photo'), (req, res) => {
        res.json({
            message : 'Upload berhasil!',
        }) 
})

app.use((err,req,res,next) => {
    res.json({
        message : err.message,
    })
})

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