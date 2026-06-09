import express from "express";
import { locationRouter } from "./location.routers";
import { userRouter } from "./user.routers";
import { commentRouter } from "./comment.routers";
import { roomRouter } from "./room.routers";
import { roomOrderRouter } from "./room-order.routers";


const router = express.Router();
router.use("/phong-thue", roomRouter);
router.use("/dat-phong", roomOrderRouter);
router.use("/binh-luan", commentRouter);
router.use("/vi-tri", locationRouter);
router.use("/", userRouter);

export default router;
