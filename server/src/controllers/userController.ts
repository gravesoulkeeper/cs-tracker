import type { Request, Response } from "express";

import { User } from "@models";
import { asyncHandler, ApiResponse } from "@utils";

export const me = asyncHandler(async (req: Request, res: Response) => {
	const user_data = await User.findById(req.user.sub)
		.select("-_id -password -sessions -updated_at -__v")
		.populate({ path: "role_id", select: "-_id name icon style" })
		.lean();
	if (!user_data) throw new Error("User not found");
	const { role_id, ...rest } = user_data;
	res.status(200).json(ApiResponse.success({ ...rest, role: role_id }));
});
