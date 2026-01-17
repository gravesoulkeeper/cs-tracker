import { Schema } from "mongoose";

import { privacySchema } from "./privacySchema";
import { sessionSchema } from "./sessionSchema";

export const userSchema = new Schema(
	{
		tag: {
			type: String,
			enum: ["anonymous", "staff", "member"],
			default: "member",
			index: true,
		},
		display_name: {
			type: String,
			required: true,
			trim: true,
			minLength: 3,
			maxLength: 20,
		},
		username: {
			type: String,
			required: true,
			match: /^[A-Za-z0-9]+$/,
			unique: true,
			lowercase: true,
			trim: true,
			minLength: 3,
			maxLength: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
			minLength: 8,
			maxLength: 40,
		},
		avatar: {
			type: String,
		},
		cover: {
			type: String,
		},
		bio: {
			type: String,
			trim: true,
			minLength: 5,
			maxLength: 150,
		},
		privacy: {
			type: privacySchema,
			default: {},
		},
		role_id: {
			type: Schema.Types.ObjectId,
			ref: "Role",
			required: true,
		},
	},

	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
);
