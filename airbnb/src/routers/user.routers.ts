import express from "express";
import { login, register } from "../controllers/auth.controllers";
import { createUser, deleteUserById, getUserDetailById, getUserList, getUserListSearchPagination, updateUserById, uploadAvatar } from "../controllers/user.controller";
import { authenticate } from "../middleware/auth/authenticate";
import { authorize } from "../middleware/auth/authorize";
import { uploadImage } from "../middleware/upload/upload-image";

const userRouter = express.Router();

userRouter.get("/", getUserList);

userRouter.get("/phan-trang-tim-kiem", getUserListSearchPagination);

userRouter.get("/:id", getUserDetailById);

userRouter.post("/users", createUser);

userRouter.put("/:id", authenticate, updateUserById);

userRouter.delete("/:id", authenticate, authorize, deleteUserById);

userRouter.post("/upload-avatar", authenticate, uploadImage('users'), uploadAvatar)

export { userRouter };