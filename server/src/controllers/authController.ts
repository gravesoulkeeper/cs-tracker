import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { Role, Session, User } from "@models";
import { asyncHandler, ApiResponse } from "@utils";
import { generateAccessToken, generateRefreshToken } from "@services";
import { COOKIE_DOMAIN, NODE_ENV, REFRESH_TOKEN_LIMIT, JWT_SECRET_KEY } from "@config";

export const registerUser = asyncHandler(async (req: Request, res: Response) => {
	const userData = req.body;
	if (!userData) return res.status(400).json(ApiResponse.error("user data is missing", 400));
	const role = await Role.findOne({ priority: 0 }).lean();
	const user = await User.create({ ...userData, role_id: role?._id });
	const access_token = generateAccessToken({ sub: user._id.toString(), tag: "member" });
	const refresh_token = generateRefreshToken({ sub: user._id.toString() });

	const session = await Session.create({
		refresh_token,
		expires_at: new Date(Date.now() + REFRESH_TOKEN_LIMIT),
		user_id: user._id,
	});

	res.status(201)
		.cookie("refresh_token", refresh_token, {
			httpOnly: true,
			secure: NODE_ENV === "production",
			sameSite: "strict",
			path: "/api/v1/auth/refresh-token",
			maxAge: REFRESH_TOKEN_LIMIT,
		})
		.json(
			ApiResponse.success(
				{
					is_authenticated: true,
					access_token,
					user_data: {
						tag: user.tag,
						display_name: user.display_name,
						username: user.username,
						email: user.email,
						avatar: user.avatar,
						cover: user.cover,
						bio: user.bio,
						role: role?.name,
					},
				},
				201,
			),
		);
});

export const refreshToken = asyncHandler(async (req: Request, res: Response) => {
	const refresh_token: string =
		(req.headers.cookie ?? "").match(/refresh_token=([^;]+)/)?.[1] ?? "";
	try {
		const decode = jwt.verify(refresh_token, JWT_SECRET_KEY);
		const { sub } = decode;
		const user = await User.findById(sub).select("tag").lean();
		if (!user) throw new Error("User not found");
		const access_token = generateAccessToken({ sub: user._id.toString(), tag: user.tag });
		res.status(200).json(ApiResponse.success({ is_authenticated: true, access_token }));
	} catch (error) {
		res.status(400).end();
	}
});
