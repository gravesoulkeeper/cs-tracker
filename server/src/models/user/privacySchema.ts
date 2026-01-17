import { Schema } from "mongoose";

export const privacySchema = new Schema(
	{
		show_location: {
			type: Boolean,
			default: true,
		},
		show_email: {
			type: Boolean,
			default: false,
		},
		show_activity: {
			type: Boolean,
			default: true,
		},
	},
	{ _id: false },
);
