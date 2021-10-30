import { createConnection } from '../database/connection'
import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda'
import { getRepository } from 'typeorm'
import { httpResponse } from '../helpers/httpResponse'

export const handler = async (
	event: APIGatewayEvent,
	_ctx: APIGatewayEventRequestContext
): Promise<{ statusCode: number; body: string }> => {
	await createConnection()

	const numberRepository = getRepository('NumberEntity')

	const numberToSave = parseInt(JSON.parse(event.body).number, 10)

	// One cool thing, NaN != NaN test it in yout REPL
	if (isNaN(numberToSave)) {
		return httpResponse(400, { message: 'sorry, thats not a number' })
	}

	const number = await numberRepository.save({ number: numberToSave })

	return httpResponse(200, number)
}
