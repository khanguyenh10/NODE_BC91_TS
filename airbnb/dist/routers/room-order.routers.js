"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomOrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const authenticate_1 = require("../middleware/auth/authenticate");
const authorize_1 = require("../middleware/auth/authorize");
const room_order_controller_1 = require("../controllers/room-order.controller");
const roomOrderRouter = express_1.default.Router();
exports.roomOrderRouter = roomOrderRouter;
roomOrderRouter.get("/", room_order_controller_1.getRoomOrderList);
roomOrderRouter.get("/lay-theo-nguoi-dung/:MaNguoiDung", room_order_controller_1.getRoomOrderListByUserId);
roomOrderRouter.get("/:id", room_order_controller_1.getRoomOrderDetailById);
roomOrderRouter.post("/", authenticate_1.authenticate, room_order_controller_1.createRoomOrder);
roomOrderRouter.put("/:id", authenticate_1.authenticate, authorize_1.authorize, room_order_controller_1.updateRoomOrderById);
roomOrderRouter.delete("/:id", authenticate_1.authenticate, authorize_1.authorize, room_order_controller_1.deleteRoomOrderById);
