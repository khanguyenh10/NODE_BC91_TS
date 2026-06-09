import express from "express";
import { uploadImage } from "../middleware/upload/upload-image";
import { authenticate } from "../middleware/auth/authenticate";
import { authorize } from "../middleware/auth/authorize";
import { createRoomOrder, deleteRoomOrderById, getRoomOrderDetailById, getRoomOrderList, getRoomOrderListByUserId, updateRoomOrderById } from "../controllers/room-order.controller";


const roomOrderRouter = express.Router();


roomOrderRouter.get("/", getRoomOrderList);

roomOrderRouter.get("/lay-theo-nguoi-dung/:MaNguoiDung", getRoomOrderListByUserId);




roomOrderRouter.get("/:id", getRoomOrderDetailById);

roomOrderRouter.post("/", authenticate, createRoomOrder);

roomOrderRouter.put("/:id", authenticate, authorize, updateRoomOrderById);

roomOrderRouter.delete("/:id", authenticate, authorize, deleteRoomOrderById);


export { roomOrderRouter };