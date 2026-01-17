import { Schema } from "mongoose";

// singleton_config
export const configSchema = new Schema(
	{
		_id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			minLength: 2,
			maxLength: 20,
			trim: true,
			required: true,
		},
		favicon: {
			type: String,
			required: true,
		},
		hero_image: {
			type: String,
			required: true,
		},
		signin_image: {
			type: String,
		},
		signup_image: {
			type: String,
		},
		feedback: {
			type: Boolean,
			default: true,
		},
	},

	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
);
