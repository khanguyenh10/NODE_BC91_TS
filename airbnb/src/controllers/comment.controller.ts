import { Request, Response } from "express";
import { ApiRes, SearchPagingQueryReq } from "../dto/api.dto";
import { Comment } from "../models";
import { ResponseHandler } from "../helper/handler-helper";
import { toCommentResponseDTo } from "../helper/mapper-helper";
import { CreateCommentReq, UpdateCommentReq } from "../dto/comment.dto";

const getCommentList = async (req: Request, res: Response<ApiRes<any>>) => {
    try {
        const comments = await Comment.findAll();
        console.log(comments);
        return ResponseHandler.success(res, comments.map(toCommentResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}

const getCommentListByRoomId = async (req: Request<{ roomId: string }>, res: Response<ApiRes<any>>) => {
    const { roomId } = req.params;
    try {
        const comments = await Comment.findAll({ where: { roomId: +(roomId as string) } });
        return ResponseHandler.success(res, comments.map(toCommentResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}


const getCommentDetailById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findOne({ where: { id } });
        if (comment) {
            return ResponseHandler.success(res, toCommentResponseDTo(comment), 200);
        } else {
            return ResponseHandler.error(res, null, 404);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const createComment = async (req: Request<{}, {}, CreateCommentReq>, res: Response<ApiRes<any>>) => {
    const { maPhong = 0, maNguoiBinhLuan = 0, ngayBinhLuan = '', noiDung = '', saoBinhLuan = 0 } = req.body;
    try {
        const newComment = await Comment.create({
            roomId: maPhong,
            userId: maNguoiBinhLuan,
            date: new Date(ngayBinhLuan),
            content: noiDung,
            star: saoBinhLuan
        })
        return ResponseHandler.success(res, toCommentResponseDTo(newComment), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const updateCommentById = async (req: Request<{ id: string }, {}, UpdateCommentReq>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    const { maPhong = 0, maNguoiBinhLuan = 0, ngayBinhLuan = '', noiDung = '', saoBinhLuan = 0 } = req.body;
    try {
        const updateComment = await Comment.findOne({ where: { id } })
        if (updateComment) {
            updateComment.set({
                roomId: maPhong,
                userId: maNguoiBinhLuan,
                date: new Date(ngayBinhLuan),
                content: noiDung,
                star: saoBinhLuan
            })
            await updateComment.save();
            return ResponseHandler.success(res, toCommentResponseDTo(updateComment), 200);
        } else {
            return ResponseHandler.error(res, null, 404);
        }

    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const deleteCommentById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    try {
        const deleteComment = await Comment.destroy({ where: { id } });
        if (deleteComment) {
            return ResponseHandler.success(res, deleteComment, 200);
        } else {
            return ResponseHandler.error(res, deleteComment, 400);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}

export { getCommentList, getCommentListByRoomId, getCommentDetailById, createComment, updateCommentById, deleteCommentById }