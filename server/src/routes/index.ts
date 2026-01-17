import { Router } from "express";

import { verifyHuman, isAuthenticated, isAdmin } from "@middleware";

import { getConfig } from "@controllers";

import configRoute from "./v1/configRoute";
import authRoute from "./v1/authRoute";
import initRoute from "./v1/initRoute";
import userRoute from "./v1/userRoute";

const router = Router();

router.get("/config", getConfig);
router.use("/config", isAuthenticated, isAdmin, configRoute);
router.use("/users", isAuthenticated, userRoute);
router.use("/auth", authRoute);
router.use("/init", isAuthenticated, isAdmin, initRoute);

export default router;
