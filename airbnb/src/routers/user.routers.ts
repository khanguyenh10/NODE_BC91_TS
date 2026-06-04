import express from "express";
import { login, register } from "../controllers/user.controllers";

const userRouter = express.Router();

userRouter.post('/register', register);

userRouter.post('/login', login);

export { userRouter };