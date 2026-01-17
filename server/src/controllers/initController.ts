import type { Request, Response } from "express";
import { Types } from "mongoose";
import path from "node:path";
import fs from "node:fs";

import type { ConfigFile } from "@types";
import { Config, Theme, Role } from "@models";
import { asyncHandler, ApiResponse } from "@utils";

export const initServer = asyncHandler(async (req: Request, res: Response) => {
	const initData: {
		_id?: "singleton_config";
		name?: string;
		favicon?: string;
		hero_image?: string;
		signin_image?: string;
		signup_image?: string;
	} = { _id: "singleton_config" };
	initData.name = req.body?.name;
	const files = req.files as ConfigFile;
	const allowedFileFields = ["favicon", "hero_image", "signin_image", "signup_image"] as const;

	if (await Config.exists({ _id: "singleton_config" })) {
		// cleaning up the incomming assets
		for (const field of allowedFileFields) {
			if (files[field]?.[0]) {
				const filePath = path.resolve(files[field]![0].path);
				fs.unlinkSync(filePath);
			}
		}
		return res.status(400).json(ApiResponse.error("Configuration already initialized", 400));
	}

	for (const field of allowedFileFields) {
		if (files[field]?.[0]) {
			initData[field] = files[field]![0].path;
		}
	}

	// initialize default role
	await Role.create({
		name: "supporter",
		style: { border: "1px solid #2A2A2A", backgroundColor: "#4C4C4C", color: "white" },
	});

	// initialize default theme
	await Theme.create({ name: "default", active: true });

	await Config.create(initData);

	res.status(201).json(ApiResponse.success("Initialized server configuration successfully", 201));
});
