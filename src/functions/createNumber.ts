import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda'
import { httpResponse } from '../helpers/httpResponse'

export const handler = async (
	event: APIGatewayEvent,
	_ctx: APIGatewayEventRequestContext
): Promise<{ statusCode: number; body: string }> => {
	return httpResponse(200, { hello: true, event })
}
