import { sequelize } from '@/database/connection'
import { Model, DataTypes } from 'sequelize'

interface INumbers {
	id?: number
	number: number
}

export class Numbers extends Model<INumbers> {}

Numbers.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		number: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		modelName: 'Numbers',
		tableName: 'numbers',
	}
)
