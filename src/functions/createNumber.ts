import { Numbers } from '@/model/Number'
import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda'
import { httpResponse } from '../helpers/httpResponse'

export const handler = async (
	event: APIGatewayEvent,
	_ctx: APIGatewayEventRequestContext
): Promise<{ statusCode: number; body: string }> => {
	const numberToSave = parseInt(JSON.parse(event.body).number, 10)

	// One cool thing, NaN != NaN test it in yout REPL
	if (isNaN(numberToSave)) {
		return httpResponse(400, { message: 'sorry, thats not a number' })
	}

	const number = await Numbers.create({ number: numberToSave })

	return httpResponse(200, number)
}
