import express from "express";
import { locationRouter } from "./location.routers";
import { userRouter } from "./user.routers";


const router = express.Router();
router.use("/vi-tri", locationRouter);
router.use("/", userRouter);

export default router;
