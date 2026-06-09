import { Request, Response } from "express"

import { ApiRes, SearchPagingQueryReq, SearchPagingRes } from "../dto/api.dto";
import { ResponseHandler } from "../helper/handler-helper";
import { toRoomResponseDTo } from "../helper/mapper-helper";
import { Op } from "sequelize";
import { CreateRoomReq, RoomIdQueryReq, RoomRes, UpdateRoomReq } from "../dto/room.dto";
import Room from "../models/room";
import { LocationIdQueryReq } from "../dto/location.dto";

const getRoomList = async (req: Request, res: Response<ApiRes<any>>) => {
    try {
        const rooms = await Room.findAll();
        return ResponseHandler.success(res, rooms.map(toRoomResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getRoomListByLocationId = async (req: Request<{}, {}, {}, LocationIdQueryReq>, res: Response<ApiRes<any>>) => {
    const { maViTri } = req.query;
    try {
        const rooms = await Room.findAll({ where: { locationId: maViTri } });
        return ResponseHandler.success(res, rooms.map(toRoomResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getRoomListSearchPagination = async (req: Request<{}, {}, {}, SearchPagingQueryReq>, res: Response<ApiRes<any>>) => {
    const { pageIndex = 1, pageSize = 2, keyword = '' } = req.query;
    try {
        const offset = (pageIndex - 1) * pageSize;
        const rooms = await Room.findAndCountAll(
            {
                where: {
                    name: {
                        [Op.like]: `%${keyword}%`
                    },
                },
                limit: +pageSize,
                offset: +offset,
            },)
        const dataResponse: SearchPagingRes<RoomRes[]> = {
            pageIndex: +pageIndex,
            pageSize: +pageSize,
            totalRow: rooms.count,
            keyword,
            data: rooms.rows.map(toRoomResponseDTo)
        }
        return ResponseHandler.success(res, dataResponse, 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getRoomDetailById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    try {
        const room = await Room.findOne({ where: { id } });
        if (room) {
            return ResponseHandler.success(res, toRoomResponseDTo(room), 200);
        } else {
            return ResponseHandler.error(res, null, 404);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const createRoom = async (req: Request<{}, {}, CreateRoomReq>, res: Response<ApiRes<any>>) => {
    const {
        tenPhong = "",
        khach = 0,
        phongNgu = 0,
        giuong = 0,
        phongTam = 0,
        moTa = '',
        giaTien = 0,
        mayGiat = true,
        banLa = true,
        tivi = true,
        dieuHoa = true,
        wifi = true,
        bep = true,
        doXe = true,
        hoBoi = true,
        banUi = true,
        maViTri = 0,
        hinhAnh = "" } = req.body;
    try {
        const newRoom = await Room.create({
            name: tenPhong,
            guestCount: khach,
            bedRoomCount: phongNgu,
            bedCount: giuong,
            bathRoomCount: phongTam,
            description: moTa,
            price: giaTien,
            hasWashingMachine: mayGiat,
            hasIronBoard: banLa,
            hasTV: tivi,
            hasAirConditioner: dieuHoa,
            hasWifi: wifi,
            hasKitchen: bep,
            hasParking: doXe,
            hasSwimmingPool: hoBoi,
            hasIron: banUi,
            locationId: maViTri,
            photo: hinhAnh
        })
        return ResponseHandler.success(res, toRoomResponseDTo(newRoom), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const updateRoomById = async (req: Request<{ id: string }, {}, UpdateRoomReq>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    const {
        tenPhong = "",
        khach = 0,
        phongNgu = 0,
        giuong = 0,
        phongTam = 0,
        moTa = '',
        giaTien = 0,
        mayGiat = true,
        banLa = true,
        tivi = true,
        dieuHoa = true,
        wifi = true,
        bep = true,
        doXe = true,
        hoBoi = true,
        banUi = true,
        maViTri = 0,
        hinhAnh = "" } = req.body;
    try {
        const updateRoom = await Room.findOne({ where: { id } })
        if (updateRoom) {
            updateRoom.set({
                name: tenPhong,
                guestCount: khach,
                bedRoomCount: phongNgu,
                bedCount: giuong,
                bathRoomCount: phongTam,
                description: moTa,
                price: giaTien,
                hasWashingMachine: mayGiat,
                hasIronBoard: banLa,
                hasTV: tivi,
                hasAirConditioner: dieuHoa,
                hasWifi: wifi,
                hasKitchen: bep,
                hasParking: doXe,
                hasSwimmingPool: hoBoi,
                hasIron: banUi,
                locationId: maViTri,
                photo: hinhAnh
            })
            await updateRoom.save();
            return ResponseHandler.success(res, toRoomResponseDTo(updateRoom), 200);
        } else {
            return ResponseHandler.error(res, toRoomResponseDTo(updateRoom), 404);
        }

    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const deleteRoomById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    try {
        const deleteRoom = await Room.destroy({ where: { id } });
        if (deleteRoom) {
            return ResponseHandler.success(res, deleteRoom, 200);
        } else {
            return ResponseHandler.error(res, deleteRoom, 400);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const uploadPhotoRoomById = async (req: Request, res: Response<ApiRes<any>>) => {
    const { maPhong } = req.query as unknown as RoomIdQueryReq;
    const { file } = req;
    try {
        const urlImage = `${process.env.BASE_URL}/${file?.path}`;
        const uploadPhotoRoom = await Room.findOne({ where: { id: maPhong } });
        if (uploadPhotoRoom) {
            uploadPhotoRoom.set({
                photo: urlImage
            });
            await uploadPhotoRoom.save();
            return ResponseHandler.success(res, toRoomResponseDTo(uploadPhotoRoom), 200)
        } else {
            return ResponseHandler.error(res, null, 404);
        }
    } catch (error) {
        console.log("FF", error);
        return ResponseHandler.error(res, error, 500);
    }
}
export { getRoomList, getRoomListByLocationId, getRoomListSearchPagination, getRoomDetailById, createRoom, updateRoomById, deleteRoomById, uploadPhotoRoomById }