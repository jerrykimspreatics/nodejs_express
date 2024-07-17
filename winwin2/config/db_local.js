const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'pw54321',
    database: 'kdt'
})

module.exports = conn;