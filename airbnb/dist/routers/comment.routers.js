"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = __importDefault(require("express"));
const comment_controller_1 = require("../controllers/comment.controller");
const authenticate_1 = require("../middleware/auth/authenticate");
const authorize_1 = require("../middleware/auth/authorize");
const commentRouter = express_1.default.Router();
exports.commentRouter = commentRouter;
commentRouter.get("/", comment_controller_1.getCommentList);
commentRouter.get("/lay-binh-luan-theo-phong/:roomId", comment_controller_1.getCommentListByRoomId);
commentRouter.get("/:id", comment_controller_1.getCommentDetailById);
commentRouter.post("/", authenticate_1.authenticate, comment_controller_1.createComment);
commentRouter.put("/:id", authenticate_1.authenticate, authorize_1.authorize, comment_controller_1.updateCommentById);
commentRouter.delete("/:id", authenticate_1.authenticate, authorize_1.authorize, comment_controller_1.deleteCommentById);
