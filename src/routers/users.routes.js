import { Router } from "express";

import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
  userProfileController,
} from "../controllers/user.controller";

import authEmailAlreadyExistsMiddleware from "../middlewares/authEmailAlreadyExists.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdmin.middleware";
// import verifyEditUserMiddleware from "../middlewares/verifyEditUser.middleware";

const router = Router();

router.post("", authEmailAlreadyExistsMiddleware, createUserController);

router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  listUserController
);

router.get("/profile", verifyAuthTokenMiddleware, userProfileController);

router.patch(
  "/:uuid",
  verifyAuthTokenMiddleware,
  // verifyEditUserMiddleware,
  updateUserController
);

router.delete(
  "/:uuid",
  verifyAuthTokenMiddleware,
  // verifyEditUserMiddleware,
  deleteUserController
);

export default router;
