import { Sequelize } from 'sequelize'
import sequelizeConfig from '../../sequelizeConfig.js'

export const sequelize = new Sequelize({
	...sequelizeConfig,
})
