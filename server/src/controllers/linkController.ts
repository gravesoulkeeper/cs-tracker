import type { Request, Response } from "express";

import { Link } from "@models";
import { asyncHandler, ApiResponse } from "@utils";

export const getLinks = asyncHandler(async (_req: Request, res: Response) => {
	const links = await Link.find().select("-__v").lean();
	res.status(200).json(ApiResponse.success(links));
});

export const createLink = asyncHandler(async (req: Request, res: Response) => {
	const linkData = req.body;
	if (!linkData) return res.status(400).json(ApiResponse.error("Link object is missing", 400));
	await Link.create(linkData);
	res.status(201).json(ApiResponse.success("Link created successfull", 201));
});

export const updateLink = asyncHandler(async (req: Request, res: Response) => {
	const linkData = req.body;
	const id = req.params.id;

	if (!linkData) return res.status(400).json(ApiResponse.error("Link object is missing", 400));

	await Link.updateOne({ _id: id }, { $set: linkData });
	res.status(200).json(ApiResponse.success("Link updated successfull"));
});

export const deleteLink = asyncHandler(async (req: Request, res: Response) => {
	const id = req.params.id;
	await Link.deleteOne({ _id: id });

	res.status(200).json(ApiResponse.success("Link deleted successfully"));
});
