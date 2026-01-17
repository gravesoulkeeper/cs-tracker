import jwt from "jsonwebtoken";

import { ACCESS_TOKEN_LIMIT, REFRESH_TOKEN_LIMIT, JWT_SECRET_KEY } from "@config";

type accessTokenProps = {
	sub: string;
	tag: string;
};

export const generateAccessToken = (payload: accessTokenProps) => {
	return jwt.sign(payload, JWT_SECRET_KEY, {
		expiresIn: ACCESS_TOKEN_LIMIT / 1000,
		algorithm: "HS256",
	});
};

type refreshTokenProps = {
	sub: string;
};

export const generateRefreshToken = (payload: refreshTokenProps) => {
	return jwt.sign(payload, JWT_SECRET_KEY, {
		expiresIn: REFRESH_TOKEN_LIMIT / 1000,
		algorithm: "HS256",
	});
};
