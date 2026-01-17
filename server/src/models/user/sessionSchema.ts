import { Schema } from "mongoose";

export const sessionSchema = new Schema({
	device_info: { type: String },
	country: { type: String },
	refresh_token: { type: String, required: true },
	expires_at: { type: Date, required: true },
	is_revoke: { type: Boolean, default: false },
	user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

sessionSchema.index({ expires_at: 1 }, { expireAfterSeconds: 0 });
