const { Sequelize } = require("sequelize");

// SQLite
const sequelize = new Sequelize("sqlite::memory:");

// 'mysql' | 'mariadb' | 'postgres' | 'mssql'
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

module.exports = sequelize;
