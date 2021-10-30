import 'reflect-metadata'
import { NumberEntity } from '@/model/Number.entity'
import {
	getConnectionManager,
	createConnection as typeormCreateConnection,
	Connection,
} from 'typeorm'
import { typeOrmConfig } from '../../ormconfig'

export const createConnection = async (): Promise<Connection> => {
	const defaultCon = getConnectionManager().has('default')

	if (defaultCon) {
		return getConnectionManager().get()
	}

	return typeormCreateConnection({
		...typeOrmConfig,
		entities: [NumberEntity],
	})
}
