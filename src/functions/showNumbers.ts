import { Numbers } from '@/model/Number'
import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda'
import { httpResponse } from '../helpers/httpResponse'

export const handler = async (
	_event: APIGatewayEvent,
	_ctx: APIGatewayEventRequestContext
): Promise<{ statusCode: number; body: string }> => {
	const numbers = await Numbers.findAll()

	return httpResponse(200, numbers)
}
