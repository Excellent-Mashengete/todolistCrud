const {Sequelize}= require('sequelize');
const dbConfig = require('../Config/db.config')
const sequelize = new Sequelize(dbConfig.connectionString.DB, dbConfig.connectionString.USER, dbConfig.connectionString.PASS, {
    host: dbConfig.connectionString.HOST,
    dialect: dbConfig.connectionString.DIALECT /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
//DB Connection testing

module.exports = sequelize;
