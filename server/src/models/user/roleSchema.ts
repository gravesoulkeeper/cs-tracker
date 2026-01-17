import { Schema } from "mongoose";

const styleSchema = new Schema(
	{
		border: {
			type: String,
			required: true,
		},
		backgroundColor: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
	},
	{ _id: false },
);

export const roleSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	icon: String,
	style: {
		type: styleSchema,
	},
	priority: {
		type: Number,
		default: 0,
	},
});
