"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentById = exports.updateCommentById = exports.createComment = exports.getCommentDetailById = exports.getCommentListByRoomId = exports.getCommentList = void 0;
const models_1 = require("../models");
const handler_helper_1 = require("../helper/handler-helper");
const mapper_helper_1 = require("../helper/mapper-helper");
const getCommentList = async (req, res) => {
    try {
        const comments = await models_1.Comment.findAll();
        console.log(comments);
        return handler_helper_1.ResponseHandler.success(res, comments.map(mapper_helper_1.toCommentResponseDTo), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getCommentList = getCommentList;
const getCommentListByRoomId = async (req, res) => {
    const { roomId } = req.params;
    try {
        const comments = await models_1.Comment.findAll({ where: { roomId: +roomId } });
        return handler_helper_1.ResponseHandler.success(res, comments.map(mapper_helper_1.toCommentResponseDTo), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getCommentListByRoomId = getCommentListByRoomId;
const getCommentDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await models_1.Comment.findOne({ where: { id } });
        if (comment) {
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toCommentResponseDTo)(comment), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, null, 404);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getCommentDetailById = getCommentDetailById;
const createComment = async (req, res) => {
    const { maPhong = 0, maNguoiBinhLuan = 0, ngayBinhLuan = '', noiDung = '', saoBinhLuan = 0 } = req.body;
    try {
        const newComment = await models_1.Comment.create({
            roomId: maPhong,
            userId: maNguoiBinhLuan,
            date: new Date(ngayBinhLuan),
            content: noiDung,
            star: saoBinhLuan
        });
        return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toCommentResponseDTo)(newComment), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.createComment = createComment;
const updateCommentById = async (req, res) => {
    const { id } = req.params;
    const { maPhong = 0, maNguoiBinhLuan = 0, ngayBinhLuan = '', noiDung = '', saoBinhLuan = 0 } = req.body;
    try {
        const updateComment = await models_1.Comment.findOne({ where: { id } });
        if (updateComment) {
            updateComment.set({
                roomId: maPhong,
                userId: maNguoiBinhLuan,
                date: new Date(ngayBinhLuan),
                content: noiDung,
                star: saoBinhLuan
            });
            await updateComment.save();
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toCommentResponseDTo)(updateComment), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, null, 404);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.updateCommentById = updateCommentById;
const deleteCommentById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteComment = await models_1.Comment.destroy({ where: { id } });
        if (deleteComment) {
            return handler_helper_1.ResponseHandler.success(res, deleteComment, 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, deleteComment, 400);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.deleteCommentById = deleteCommentById;
