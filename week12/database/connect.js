require('dotenv').config();
const mysql = require('mysql2/promise');


function connectDb(){
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        database: "employee_manage",
    });
}


module.exports = connectDb;


