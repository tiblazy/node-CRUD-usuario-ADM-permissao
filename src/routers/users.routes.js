import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import listUserController from "../controllers/listUser.controller";
import userProfileController from "../controllers/userProfile.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";

import userAlreadyExistsMiddleware from "../middlewares/userAlreadyExists.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdmin.middleware";

const router = Router();

router.post("", userAlreadyExistsMiddleware, createUserController);

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
  verifyIsAdmMiddleware,
  updateUserController
);
router.delete(
  "/:uuid",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  deleteUserController
);

export default router;
