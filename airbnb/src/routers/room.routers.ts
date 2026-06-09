import express from "express";
import { uploadImage } from "../middleware/upload/upload-image";
import { authenticate } from "../middleware/auth/authenticate";
import { authorize } from "../middleware/auth/authorize";
import { createRoom, deleteRoomById, getRoomDetailById, getRoomList, getRoomListByLocationId, getRoomListSearchPagination, updateRoomById, uploadPhotoRoomById } from "../controllers/room.controller";

const roomRouter = express.Router();


roomRouter.get("/", getRoomList);

roomRouter.get("/lay-phong-theo-vi-tri", getRoomListByLocationId);


roomRouter.get("/phan-trang-tim-kiem", getRoomListSearchPagination);


roomRouter.get("/:id", getRoomDetailById);

roomRouter.post("/", authenticate, authorize, createRoom);

roomRouter.put("/:id", authenticate, authorize, updateRoomById);

roomRouter.delete("/:id", authenticate, authorize, deleteRoomById);

roomRouter.post("/upload-hinh-phongthue", authenticate, authorize, uploadImage('locations'), uploadPhotoRoomById)

export { roomRouter };