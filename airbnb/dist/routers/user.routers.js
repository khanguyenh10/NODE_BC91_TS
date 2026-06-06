"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controllers_1 = require("../controllers/user.controllers");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.post('/register', user_controllers_1.register);
userRouter.post('/login', user_controllers_1.login);
