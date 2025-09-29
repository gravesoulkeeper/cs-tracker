import { connectMongoDB } from "./src/db/index.ts";
import { app } from "./src/app.ts";
import { PORT } from "./src/config/constants.ts";

(async (): Promise<void> => {
	try {
		await connectMongoDB();

		app.listen(PORT, () => {
			console.log(`server is listening on port : ${PORT}`);
		});
	} catch (err) {
		console.log("Failed to start the server :\n", err.message);
		process.exit(1);
	}
})();
