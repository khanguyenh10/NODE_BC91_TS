"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoomOrderById = exports.updateRoomOrderById = exports.createRoomOrder = exports.getRoomOrderDetailById = exports.getRoomOrderListByUserId = exports.getRoomOrderList = void 0;
const handler_helper_1 = require("../helper/handler-helper");
const mapper_helper_1 = require("../helper/mapper-helper");
const models_1 = require("../models");
const getRoomOrderList = async (req, res) => {
    try {
        const roomOrders = await models_1.RoomOrder.findAll();
        return handler_helper_1.ResponseHandler.success(res, roomOrders.map(mapper_helper_1.toRoomOrderResponseDTo), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getRoomOrderList = getRoomOrderList;
const getRoomOrderListByUserId = async (req, res) => {
    const { MaNguoiDung } = req.params;
    try {
        const roomOrders = await models_1.RoomOrder.findAll({ where: { userId: MaNguoiDung } });
        return handler_helper_1.ResponseHandler.success(res, roomOrders.map(mapper_helper_1.toRoomOrderResponseDTo), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getRoomOrderListByUserId = getRoomOrderListByUserId;
const getRoomOrderDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const roomOrder = await models_1.RoomOrder.findOne({ where: { id } });
        if (roomOrder) {
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toRoomOrderResponseDTo)(roomOrder), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, null, 404);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getRoomOrderDetailById = getRoomOrderDetailById;
const createRoomOrder = async (req, res) => {
    const { maPhong = 0, ngayDen = "", ngayDi = "", soLuongKhach = 0, maNguoiDung = 0 } = req.body;
    try {
        const newRoom = await models_1.RoomOrder.create({
            roomId: maPhong,
            fromDate: new Date(ngayDen),
            toDate: new Date(ngayDi),
            guestCount: soLuongKhach,
            userId: maNguoiDung,
        });
        return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toRoomOrderResponseDTo)(newRoom), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.createRoomOrder = createRoomOrder;
const updateRoomOrderById = async (req, res) => {
    const { id } = req.params;
    const { maPhong = 0, ngayDen = "", ngayDi = "", soLuongKhach = 0, maNguoiDung = 0 } = req.body;
    try {
        const updateRoom = await models_1.RoomOrder.findOne({ where: { id } });
        if (updateRoom) {
            updateRoom.set({
                roomId: maPhong,
                fromDate: new Date(ngayDen),
                toDate: new Date(ngayDi),
                guestCount: soLuongKhach,
                userId: maNguoiDung,
            });
            await updateRoom.save();
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toRoomOrderResponseDTo)(updateRoom), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, null, 404);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.updateRoomOrderById = updateRoomOrderById;
const deleteRoomOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRoomOrder = await models_1.RoomOrder.destroy({ where: { id } });
        if (deleteRoomOrder) {
            return handler_helper_1.ResponseHandler.success(res, deleteRoomOrder, 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, deleteRoomOrder, 400);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.deleteRoomOrderById = deleteRoomOrderById;
