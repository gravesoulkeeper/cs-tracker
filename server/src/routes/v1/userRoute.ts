import { Router } from "express";

import { me } from "@controllers";

const router = Router();

router.get("/me", me);

export default router;
