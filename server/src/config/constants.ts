import "dotenv/config";

const NODE_ENV = process.env.NODE_ENV == "production";

const MONGODB_URL: string = NODE_ENV
	? (process.env.MONGODB_URL ?? "mongodb://localhost:27017/tracker")
	: "mongodb://localhost:27017/tracker";

const CORS_ORIGIN: string = NODE_ENV ? (process.env.CORS_ORIGIN ?? "localhost") : "*";
const PORT: number = NODE_ENV ? parseInt(process.env.PORT ?? "6600") : 6600;

export { MONGODB_URL, CORS_ORIGIN, PORT };
