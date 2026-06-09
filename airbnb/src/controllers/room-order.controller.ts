import { Request, Response } from "express"

import { ApiRes, SearchPagingQueryReq, SearchPagingRes } from "../dto/api.dto";
import { ResponseHandler } from "../helper/handler-helper";
import { toRoomOrderResponseDTo } from "../helper/mapper-helper";
import { Op } from "sequelize";
import { RoomIdQueryReq } from "../dto/room.dto";
import { RoomOrder } from "../models";
import { CreateRoomOrderReq, UpdateRoomOrderReq } from "../dto/room-order.dto";

const getRoomOrderList = async (req: Request, res: Response<ApiRes<any>>) => {
    try {
        const roomOrders = await RoomOrder.findAll();
        return ResponseHandler.success(res, roomOrders.map(toRoomOrderResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getRoomOrderListByUserId = async (req: Request<{ MaNguoiDung: string }>, res: Response<ApiRes<any>>) => {
    const { MaNguoiDung } = req.params;
    try {
        const roomOrders = await RoomOrder.findAll({ where: { userId: MaNguoiDung } });
        return ResponseHandler.success(res, roomOrders.map(toRoomOrderResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}

const getRoomOrderDetailById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    try {
        const roomOrder = await RoomOrder.findOne({ where: { id } });
        if (roomOrder) {
            return ResponseHandler.success(res, toRoomOrderResponseDTo(roomOrder), 200);
        } else {
            return ResponseHandler.error(res, null, 404);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const createRoomOrder = async (req: Request<{}, {}, CreateRoomOrderReq>, res: Response<ApiRes<any>>) => {
    const {
        maPhong = 0,
        ngayDen = "",
        ngayDi = "",
        soLuongKhach = 0,
        maNguoiDung = 0 } = req.body;
    try {
        const newRoom = await RoomOrder.create({
            roomId: maPhong,
            fromDate: new Date(ngayDen),
            toDate: new Date(ngayDi),
            guestCount: soLuongKhach,
            userId: maNguoiDung,
        })
        return ResponseHandler.success(res, toRoomOrderResponseDTo(newRoom), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const updateRoomOrderById = async (req: Request<{ id: string }, {}, UpdateRoomOrderReq>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    const {
        maPhong = 0,
        ngayDen = "",
        ngayDi = "",
        soLuongKhach = 0,
        maNguoiDung = 0 } = req.body;
    try {
        const updateRoom = await RoomOrder.findOne({ where: { id } })
        if (updateRoom) {
            updateRoom.set({
                roomId: maPhong,
                fromDate: new Date(ngayDen),
                toDate: new Date(ngayDi),
                guestCount: soLuongKhach,
                userId: maNguoiDung,
            })
            await updateRoom.save();
            return ResponseHandler.success(res, toRoomOrderResponseDTo(updateRoom), 200);
        } else {
            return ResponseHandler.error(res, null, 404);
        }

    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const deleteRoomOrderById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    try {
        const deleteRoomOrder = await RoomOrder.destroy({ where: { id } });
        if (deleteRoomOrder) {
            return ResponseHandler.success(res, deleteRoomOrder, 200);
        } else {
            return ResponseHandler.error(res, deleteRoomOrder, 400);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}

export { getRoomOrderList, getRoomOrderListByUserId, getRoomOrderDetailById, createRoomOrder, updateRoomOrderById, deleteRoomOrderById, }