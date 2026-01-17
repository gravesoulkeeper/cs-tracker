import axios from "axios";
import store from "@store";

import { SERVER_URL, SERVER_VERSION } from "@config";
import { getAccessToken } from "./auth";

const BASE_URL = `${SERVER_URL}/api/${SERVER_VERSION}`;

export const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

api.interceptors.request.use((config) => {
	const token = store.getState().auth.access_token;
	if (token) config.headers.Authorization = `Bearer ${token}`;
	return config;
});

api.interceptors.response.use(
	(res) => res,
	async (err) => {
		const originalRequest = err.config;
		if (err.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				await store.dispatch(getAccessToken());
				const { is_authenticated, access_token } = store.getState().auth;
				if (is_authenticated) {
					originalRequest.headers.Authorization = `Bearer ${access_token}`;
					return api(originalRequest);
				}
			} catch (error) {
				return err;
			}
		}
		return err;
	},
);
