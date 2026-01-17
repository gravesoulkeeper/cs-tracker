import type { Request, Response, NextFunction } from "express";

import { RECAPTCHA_SECRET_KEY } from "@config";
import { asyncHandler, ApiResponse } from "@utils";

export const verifyHuman = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const recaptcha_key: string = req.body.recaptcha_key ?? "";
	const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptcha_key}`;
	const response = await fetch(verificationUrl, { method: "POST" });
	const data = await response.json();
	if (!data.success) return res.status(403).json(ApiResponse.error("you are not a human", 403));
	delete req.body.recaptcha_key;
	next();
});
