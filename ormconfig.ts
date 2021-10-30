import { ConnectionOptions } from 'typeorm'

export const typeOrmConfig: ConnectionOptions = {
	type: 'mysql',
	host: process.env.MYSQL_HOST,
	port: parseInt(process.env.MYSQL_PORT),
	username: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASS,
	database: process.env.MYSQL_DB,
	logging: true,
}

const config: ConnectionOptions = {
	...typeOrmConfig,
	migrations: ['./src/database/migrations/*.ts'],
	cli: {
		migrationsDir: './src/database/migrations',
	},
}

export default config
