import express from "express";
import { createLocation, deleteLocationById, getLocationList, updateLocationById } from "../controllers/location.controller";

const locationRouter = express.Router();


locationRouter.get("/", getLocationList);

locationRouter.post("/", createLocation);

locationRouter.put("/:id", updateLocationById);

locationRouter.delete("/:id", deleteLocationById);

export { locationRouter };