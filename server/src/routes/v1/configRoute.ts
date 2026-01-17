import { Router } from "express";

import {
	updateSiteAssets,
	getThemes,
	createTheme,
	updateTheme,
	deleteTheme,
	getLinks,
	createLink,
	updateLink,
	deleteLink,
} from "@controllers";
import { upload } from "@middleware";

const router = Router();

router.patch(
	"/assets",
	upload.fields([
		{ name: "favicon", maxCount: 1 },
		{ name: "hero_image", maxCount: 1 },
		{ name: "sigin_image", maxCount: 1 },
		{ name: "signup_image", maxCount: 1 },
	]),
	updateSiteAssets,
);

router.route("/themes").get(getThemes).post(createTheme);
router.route("/themes/:id").patch(updateTheme).delete(deleteTheme);

router.route("/links").get(getLinks).post(createLink);
router.route("/links/:id").patch(updateLink).delete(deleteLink);

export default router;
