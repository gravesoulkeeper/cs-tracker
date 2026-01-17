import type { Express, Request, Response, NextFunction } from "express";
import express from "express";
import cors from "cors";
import path from "path";

import { CORS_ORIGIN } from "@config";
import { ApiResponse } from "@utils";
import router from "@routes";

export const app: Express = express();

app.set("trust proxy", true);

// middlewares
app.use("/uploads", express.static(path.resolve("uploads")));
app.use(
	cors({
		origin: CORS_ORIGIN,
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
		credentials: true,
	}),
);
app.use(express.json({ limit: "10kb" }));
app.use("/api/v1", router);

// handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
	res.status(500).json(ApiResponse.error(err.message, 500));
	console.log(err);
});
