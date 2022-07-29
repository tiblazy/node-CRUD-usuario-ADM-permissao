import { Router } from "express";

import sessionsLoginController from "../controllers/sessions.controller";

const router = Router();

router.post("", sessionsLoginController);

export default router;
