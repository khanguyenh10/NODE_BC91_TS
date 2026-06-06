import express from "express";
import { login, register } from "../controllers/auth.controllers";
import { createUser, deleteUserById, getUserDetailById, getUserList, getUserListSearchPagination, updateUserById, uploadAvatar } from "../controllers/user.controller";
import { authenticate } from "../middleware/auth/authenticate";
import { authorize } from "../middleware/auth/authorize";
import { uploadImage } from "../middleware/upload/upload-image";

const userRouter = express.Router();

userRouter.post('/register', register);

userRouter.post('/login', login);



userRouter.get("/users/", getUserList);

userRouter.get("/users/phan-trang-tim-kiem", getUserListSearchPagination);

userRouter.get("/users/:id", getUserDetailById);

userRouter.post("/users", createUser);

userRouter.put("/users/:id", authenticate, updateUserById);

userRouter.delete("/users/:id", authenticate, authorize, deleteUserById);

userRouter.post("/users/upload-avatar", authenticate, uploadImage('users'), uploadAvatar)

export { userRouter };