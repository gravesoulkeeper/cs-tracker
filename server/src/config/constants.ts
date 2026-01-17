import "dotenv/config";

const NODE_ENV: string = process.env.NODE_ENV ?? "development";

const PORT: number = parseInt(process.env.PORT ?? "6600");
const CORS_ORIGIN: string = process.env.CORS_ORIGIN ?? "http://localhost:5173/";

const MONGODB_URL: string = process.env.MONGODB_URL ?? "mongodb://localhost:27017/tracker";

const RECAPTCHA_SECRET_KEY: string = process.env.RECAPTCHA_SECRET_KEY ?? "";

const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY ?? "secret-key";
const ACCESS_TOKEN_LIMIT: number = parseInt(process.env.ACCESS_TOKEN_LIMIT ?? "900000");
const REFRESH_TOKEN_LIMIT: number = parseInt(process.env.REFRESH_TOKEN_LIMIT ?? "864000000");

const COOKIE_DOMAIN: string = process.env.COOKIE_DOMAIN ?? "http://localhost:5173/";

export {
	NODE_ENV,
	PORT,
	CORS_ORIGIN,
	MONGODB_URL,
	RECAPTCHA_SECRET_KEY,
	JWT_SECRET_KEY,
	ACCESS_TOKEN_LIMIT,
	REFRESH_TOKEN_LIMIT,
	COOKIE_DOMAIN,
};
