import type { Request, Response } from "express";

import { Theme } from "@models";
import { asyncHandler, ApiResponse } from "@utils";

export const getThemes = asyncHandler(async (_req: Request, res: Response) => {
	const themes = await Theme.find().select("-__v").lean();
	res.status(200).json(ApiResponse.success(themes));
});

export const createTheme = asyncHandler(async (req: Request, res: Response) => {
	const themeData = req.body;
	if (!themeData) return res.status(400).json(ApiResponse.error("Theme object is missing", 400));
	await Theme.create(themeData);
	res.status(201).json(ApiResponse.success("Theme created successfully", 201));
});

export const updateTheme = asyncHandler(async (req: Request, res: Response) => {
	const themeData = req.body;
	const id = req.params.id;

	if (!themeData) return res.status(400).json(ApiResponse.error("Theme object is missing", 400));
	if (themeData?.active) await Theme.updateOne({ active: true }, { $set: { active: false } });

	await Theme.updateOne({ _id: id }, { $set: themeData });
	res.status(200).json(ApiResponse.success("Theme updated successfully"));
});

export const deleteTheme = asyncHandler(async (req: Request, res: Response) => {
	const id = req.params.id;
	const theme = await Theme.findById(id);

	if (!theme) return res.status(400).json(ApiResponse.error("Theme id is invalid", 400));
	if (theme.name === "default")
		return res.status(400).json(ApiResponse.error("Default theme can't be deleted", 400));
	// if the current theme is active, making the default theme active
	if (theme.active) await Theme.updateOne({ name: "default" }, { $set: { active: true } });

	await theme.deleteOne();
	res.status(200).json(ApiResponse.success("Theme deleted successfully"));
});
