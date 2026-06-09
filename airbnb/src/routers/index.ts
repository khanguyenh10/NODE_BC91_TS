import express from "express";
import { locationRouter } from "./location.routers";
import { userRouter } from "./user.routers";
import { commentRouter } from "./comment.routers";


const router = express.Router();
router.use("/binh-luan", commentRouter);
router.use("/vi-tri", locationRouter);
router.use("/", userRouter);

export default router;
