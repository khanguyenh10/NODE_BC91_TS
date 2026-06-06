import express from "express";
import { createLocation, deleteLocationById, getLocationDetailById, getLocationList, getLocationListSearchPagination, updateLocationById, uploadPhotoLocationById } from "../controllers/location.controller";
import { uploadImage } from "../middleware/upload/upload-image";
import { authenticate } from "../middleware/auth/authenticate";
import { authorize } from "../middleware/auth/authorize";

const locationRouter = express.Router();


locationRouter.get("/", getLocationList);

locationRouter.get("/phan-trang-tim-kiem", getLocationListSearchPagination);

locationRouter.get("/:id", getLocationDetailById);

locationRouter.post("/", authenticate, authorize, createLocation);

locationRouter.put("/:id", authenticate, authorize, updateLocationById);

locationRouter.delete("/:id", authenticate, authorize, deleteLocationById);

locationRouter.post("/upload-hinh-vitri", authenticate, authorize, uploadImage('locations'), uploadPhotoLocationById)

export { locationRouter };