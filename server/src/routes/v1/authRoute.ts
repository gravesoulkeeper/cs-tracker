import { Router } from "express";

import { verifyHuman, isAuthenticated } from "@middleware";
import { registerUser, refreshToken } from "@controllers";

const router = Router();

router.post("/register", verifyHuman, registerUser);
router.post("/refresh-token", refreshToken);

export default router;
