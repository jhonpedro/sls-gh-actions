import { createConnection } from '../database/connection'
import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda'
import { getRepository } from 'typeorm'
import { httpResponse } from '../helpers/httpResponse'

export const handler = async (
	_event: APIGatewayEvent,
	_ctx: APIGatewayEventRequestContext
): Promise<{ statusCode: number; body: string }> => {
	await createConnection()

	const numbersRepository = getRepository('NumberEntity')

	const numbers = await numbersRepository.find()

	return httpResponse(200, numbers)
}
