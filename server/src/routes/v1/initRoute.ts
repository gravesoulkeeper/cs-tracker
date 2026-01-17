import { Router } from "express";

import { prepareUploads, upload } from "@middleware";
import { initServer } from "@controllers";

const router = Router();

router.post(
	"/config",
	prepareUploads,
	upload.fields([
		{ name: "favicon", maxCount: 1 },
		{ name: "hero_image", maxCount: 1 },
		{ name: "signin_image", maxCount: 1 },
		{ name: "signup_image", maxCount: 1 },
	]),
	initServer,
);

export default router;
