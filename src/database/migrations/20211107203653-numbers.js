'use strict'

module.exports = {
	/**
	 * @param { import('sequelize').QueryInterface } queryInterface
	 * @param { Object } Sequelize
	 * @param { import('sequelize').DataTypes } Sequelize.DataTypes
	 */
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('numbers', {
			id: {
				type: Sequelize.DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			number: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
			},
		})
	},
	/**
	 * @param { import('sequelize').QueryInterface } queryInterface
	 * @param { Object } Sequelize
	 * @param { import('sequelize').DataTypes } Sequelize.DataTypes
	 */
	down: async (queryInterface, _Sequelize) => {
		await queryInterface.dropTable('numbers')
	},
}
