import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('numbers')
export class NumberEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	number: number
}
