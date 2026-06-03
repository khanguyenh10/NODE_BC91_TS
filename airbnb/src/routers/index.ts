import express from "express";
import { locationRouter } from "./location.routers";


const router = express.Router();
router.use("/vi-tri", locationRouter);

export default router;
