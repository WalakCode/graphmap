const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'graphmap',
    connectionLimit:5,
})

module.exports = pool