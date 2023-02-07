const { Sequelize } = require("sequelize")

const db = new Sequelize({
    dialect: process.env.DB_DIALECT, // selecciona el motor de dialecto de bases de datos 
    host: process.env.DB_HOST, // direccion donde se encuentra la base de datos
    username: process.env.DB_USERNAME, // usuario, por defecro postgres
    password: process.env.DB_PASSWORD, // contraseña que se digita en postgres
    database: process.env.DB_DATABASE, // nombre de la base de datos 
    logging: false //mostrar logs de la base de datos en consola

})

module.exports = {db}