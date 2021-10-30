export const httpResponse = (statusCode = 400, body: unknown) => ({
	statusCode,
	body: JSON.stringify(body),
})
