"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const location_routers_1 = require("./location.routers");
const user_routers_1 = require("./user.routers");
const comment_routers_1 = require("./comment.routers");
const room_routers_1 = require("./room.routers");
const room_order_routers_1 = require("./room-order.routers");
const router = express_1.default.Router();
router.use("/phong-thue", room_routers_1.roomRouter);
router.use("/dat-phong", room_order_routers_1.roomOrderRouter);
router.use("/binh-luan", comment_routers_1.commentRouter);
router.use("/vi-tri", location_routers_1.locationRouter);
router.use("/", user_routers_1.userRouter);
exports.default = router;
