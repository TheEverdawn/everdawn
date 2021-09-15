import axios from "axios";

const { API_URL: apiUrl, API_KEY: apiKey } = process.env;

export const api = axios.create({
	baseURL: apiUrl,
	headers: { Authorization: `Bearer ${apiKey}` },
});
