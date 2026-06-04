import express from "express";
import { createLocation, deleteLocationById, getLocationDetailById, getLocationList, getLocationListSearchPagination, updateLocationById, uploadPhotoLocationById } from "../controllers/location.controller";
import { uploadImage } from "../middleware/upload/upload-image";

const locationRouter = express.Router();


locationRouter.get("/", getLocationList);

locationRouter.get("/phan-trang-tim-kiem", getLocationListSearchPagination);

locationRouter.get("/:id", getLocationDetailById);

locationRouter.post("/", createLocation);

locationRouter.put("/:id", updateLocationById);

locationRouter.delete("/:id", deleteLocationById);

locationRouter.post("/upload-hinh-vitri", uploadImage('locations'), uploadPhotoLocationById)

export { locationRouter };