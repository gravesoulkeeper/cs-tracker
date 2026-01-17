import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ApiResponse } from "@utils";
import { JWT_SECRET_KEY } from "@config";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	try {
		const token: string = req.headers.authorization?.split(" ")[1] ?? "";
		try {
			const decoded = jwt.verify(token, JWT_SECRET_KEY);
			req.user = decoded as { sub: string; tag: "anonymous" | "staff" | "member" };
			next();
		} catch (error) {
			return res.status(401).json(ApiResponse.error("Unauthorized", 401));
		}
	} catch (err) {
		res.status(401).json(ApiResponse.error("Unauthorized", 401));
	}
};
