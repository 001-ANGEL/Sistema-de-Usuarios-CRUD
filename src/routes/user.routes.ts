import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

import {
  validateUserFields,
  validateEmail,
  existsEmail,
  validateID,
} from "../middlewares/user.middleware";

const router = Router();

router.post(
  "/users",
  validateUserFields,
  validateEmail,
  existsEmail,
  createUser
);

router.get("/users", getAllUsers);

router.get("/users/:id", validateID, getUserById);

router.put(
  "/users/:id",
  validateUserFields,
  validateEmail,
  existsEmail,
  validateID,
  updateUser
);

router.delete("/users/:id", validateID, deleteUser);

export default router;
