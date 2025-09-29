import type { Express, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import { ApiResponse } from "./utils/response.ts";
import { CORS_ORIGIN } from "./config/constants.ts";

export const app: Express = express();

// middlewares
app.use(
	cors({
		origin: CORS_ORIGIN,
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
		credentials: true,
	}),
);
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// routes

// handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
	res.status(500).json(ApiResponse.error(err.message, 500));
});
