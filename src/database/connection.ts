import { Sequelize } from 'sequelize'
import sequelizeConfig from '../../sequelizeConfig.js'

export const sequelize = new Sequelize({
	...sequelizeConfig,
	define: { underscored: true, omitNull: false, raw: true },
	pool: {
		max: 2,
		min: 0,
	},
	dialectOptions: {
		connectTimeout: 60000,
	},
})
