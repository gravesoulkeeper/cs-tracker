import type { Request, Response, NextFunction } from "express";

import { User } from "@models";
import { asyncHandler, ApiResponse } from "@utils";

export const isAdmin = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const { tag } = req.user;
	if (req.user.tag === "member")
		return res.status(403).json(ApiResponse.error("Unauthorized", 403));
	const user = await User.findById(req.user.sub);
	if (!user || user.tag === "member")
		return res.status(403).json(ApiResponse.error("Unauthorized", 403));
	next();
});
