import type { Request, Response, NextFunction } from "express";

import { asyncHandler } from "@utils";

export const cleanIp = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	// let ip = req.ip || "";
	//
	// if (ip.substr(0, 7) === "::ffff:") ip = ip.substr(7);
	// req.cleanIp = ip;
	//
	next();
});
