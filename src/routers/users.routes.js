import { Router } from "express";

import {
  createUserController,
  listUserController,
  profileUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller";

import authEmailAlreadyExistsMiddleware from "../middlewares/authEmailAlreadyExists.middleware";
import authUpdateMiddleware from "../middlewares/authUpdate.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdmin.middleware";

const router = Router();

router.post("", authEmailAlreadyExistsMiddleware, createUserController);

router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  listUserController
);

router.get("/profile", verifyAuthTokenMiddleware, profileUserController);

router.patch(
  "/:uuid",
  verifyAuthTokenMiddleware,
  authUpdateMiddleware,
  updateUserController
);

router.delete(
  "/:uuid",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  deleteUserController
);

export default router;
