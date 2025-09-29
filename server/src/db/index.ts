import mongoose from "mongoose";
import type { Mongoose } from "mongoose";

import { MONGODB_URL } from "../config/constants.ts";

export async function connectMongoDB(): Promise<void> {
	try {
		const connectionInstance: Mongoose = await mongoose.connect(MONGODB_URL);
		console.log("MongoDB connection establish :", connectionInstance.connection.host);
	} catch (err) {
		console.error("MongoDB connection failed!\n", err.message);
		process.exit(1);
	}
}
