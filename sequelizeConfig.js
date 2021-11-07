require('dotenv').config()

/** @type {import('sequelize').Options} */
const config = {
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASS,
	database: process.env.MYSQL_DB,
	dialect: 'mysql',
}

module.exports = config
