import express from "express";
import { createLocation, deleteLocationById, getLocationDetailById, getLocationList, getLocationListSearchPagination, updateLocationById } from "../controllers/location.controller";

const locationRouter = express.Router();


locationRouter.get("/", getLocationList);

locationRouter.get("/:id", getLocationDetailById);

locationRouter.get("/phan-trang-tim-kiem", getLocationListSearchPagination);

locationRouter.post("/", createLocation);

locationRouter.put("/:id", updateLocationById);

locationRouter.delete("/:id", deleteLocationById);

export { locationRouter };