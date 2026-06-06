"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const location_routers_1 = require("./location.routers");
const user_routers_1 = require("./user.routers");
const router = express_1.default.Router();
router.use("/vi-tri", location_routers_1.locationRouter);
router.use("/", user_routers_1.userRouter);
exports.default = router;
