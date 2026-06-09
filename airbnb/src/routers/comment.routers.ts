import express from "express";
import { createComment, deleteCommentById, getCommentDetailById, getCommentList, getCommentListByRoomId, updateCommentById } from "../controllers/comment.controller";
import { authenticate } from "../middleware/auth/authenticate";
import { authorize } from "../middleware/auth/authorize";

const commentRouter = express.Router();

commentRouter.get("/", getCommentList);

commentRouter.get("/lay-binh-luan-theo-phong/:roomId", getCommentListByRoomId);

commentRouter.get("/:id", getCommentDetailById);

commentRouter.post("/", authenticate, createComment);

commentRouter.put("/:id", authenticate, authorize, updateCommentById);

commentRouter.delete("/:id", authenticate, authorize, deleteCommentById);


export { commentRouter }