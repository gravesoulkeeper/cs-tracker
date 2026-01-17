import type { NextFunction, Request, Response } from "express";
import path from "node:path";
import fs from "node:fs";

export const prepareUploads = (req: Request, res: Response, next: NextFunction) => {
	const uplodsPath = path.join(process.cwd(), "uploads");
	if (fs.existsSync(uplodsPath)) return next();
	fs.mkdirSync(uplodsPath);
	next();
};
