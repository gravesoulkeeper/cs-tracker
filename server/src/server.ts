import { connectMongoDB } from "./db/index";
import { app } from "./app";
import { PORT } from "@config";

(async (): Promise<void> => {
	try {
		await connectMongoDB();

		app.listen(PORT, () => {
			console.log(`server is listening on port : ${PORT}`);
		});
	} catch (err: any) {
		console.log("Failed to start the server :\n", err.message);
		process.exit(1);
	}
})();
