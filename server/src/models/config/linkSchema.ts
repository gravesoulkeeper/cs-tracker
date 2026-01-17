import { Schema } from "mongoose";

export const linkSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});
