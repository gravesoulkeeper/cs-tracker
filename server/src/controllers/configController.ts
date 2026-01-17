import type { Request, Response } from "express";

import { Config, Theme, Link } from "@models";
import type { ConfigFile } from "@types";
import { asyncHandler, ApiResponse } from "@utils";

export const getConfig = asyncHandler(async (req: Request, res: Response) => {
	const config = await Config.findById("singleton_config")
		.select("-_id -feedback -created_at -updated_at -__v")
		.lean();
	const theme = await Theme.find({ name: "default" }).select("-_id -name -active -__v").lean();
	const links = await Link.find().select("-_id -__v").lean();
	const result = { ...config, theme: theme[0], links };
	res.status(200).json(ApiResponse.success(result));
});

export const updateSiteAssets = asyncHandler(async (req: Request, res: Response) => {
	const updatedData: {
		name?: string;
		favicon?: string;
		hero_image?: string;
		signin_image?: string;
		signup_image?: string;
	} = {};
	const files = req.files as ConfigFile;

	if (req.body?.name) updatedData.name = req.body.name;
	const config = await Config.updateOne({ _id: "singleton_config" }, { $set: updatedData });
	res.status(200).json(ApiResponse.success("Config updated successfully"));
});
