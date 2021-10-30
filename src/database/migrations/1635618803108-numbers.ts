import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class numbers1635618803108 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'numbers',
				columns: [
					{
						type: 'integer',
						name: 'id',
						generatedType: 'STORED',
						isGenerated: true,
						generationStrategy: 'increment',
						isPrimary: true,
					},
					{
						type: 'integer',
						name: 'number',
						isNullable: false,
					},
				],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('numbers')
	}
}
