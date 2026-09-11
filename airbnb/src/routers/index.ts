import express from "express";
import { locationRouter } from "./location.routers";
import { userRouter } from "./user.routers";
import { commentRouter } from "./comment.routers";
import { roomRouter } from "./room.routers";
import { roomOrderRouter } from "./room-order.routers";
import { login, register } from "../controllers/auth.controllers";


const router = express.Router();
router.use("/phong-thue", roomRouter);
router.use("/dat-phong", roomOrderRouter);
router.use("/binh-luan", commentRouter);
router.use("/vi-tri", locationRouter);
router.use("/users", userRouter);
router.use('/signup', register);
router.use('/signin', login);


export default router;
