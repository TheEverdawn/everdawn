const apiKey = process.env.API_KEY;

export function authenticated(req, _, next) {
	const expectedAuthHeader = `Bearer ${apiKey}`;

	if (req.headers.authorization !== expectedAuthHeader)
		return next(new Error("Invalid or missing API key"));

	next();
}
