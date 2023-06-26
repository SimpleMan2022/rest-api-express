const mysql = require('mysql2')

const dbPool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'rest-api-express'
})

module.exports = dbPool.promise()