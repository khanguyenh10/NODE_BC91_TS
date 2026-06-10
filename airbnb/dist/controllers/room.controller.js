"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPhotoRoomById = exports.deleteRoomById = exports.updateRoomById = exports.createRoom = exports.getRoomDetailById = exports.getRoomListSearchPagination = exports.getRoomListByLocationId = exports.getRoomList = void 0;
const handler_helper_1 = require("../helper/handler-helper");
const mapper_helper_1 = require("../helper/mapper-helper");
const sequelize_1 = require("sequelize");
const room_1 = __importDefault(require("../models/room"));
const getRoomList = async (req, res) => {
    try {
        const rooms = await room_1.default.findAll();
        return handler_helper_1.ResponseHandler.success(res, rooms.map(mapper_helper_1.toRoomResponseDTo), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getRoomList = getRoomList;
const getRoomListByLocationId = async (req, res) => {
    const { maViTri } = req.query;
    try {
        const rooms = await room_1.default.findAll({ where: { locationId: maViTri } });
        return handler_helper_1.ResponseHandler.success(res, rooms.map(mapper_helper_1.toRoomResponseDTo), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getRoomListByLocationId = getRoomListByLocationId;
const getRoomListSearchPagination = async (req, res) => {
    const { pageIndex = 1, pageSize = 2, keyword = '' } = req.query;
    try {
        const offset = (pageIndex - 1) * pageSize;
        const rooms = await room_1.default.findAndCountAll({
            where: {
                name: {
                    [sequelize_1.Op.like]: `%${keyword}%`
                },
            },
            limit: +pageSize,
            offset: +offset,
        });
        const dataResponse = {
            pageIndex: +pageIndex,
            pageSize: +pageSize,
            totalRow: rooms.count,
            keyword,
            data: rooms.rows.map(mapper_helper_1.toRoomResponseDTo)
        };
        return handler_helper_1.ResponseHandler.success(res, dataResponse, 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getRoomListSearchPagination = getRoomListSearchPagination;
const getRoomDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await room_1.default.findOne({ where: { id } });
        if (room) {
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toRoomResponseDTo)(room), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, null, 404);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getRoomDetailById = getRoomDetailById;
const createRoom = async (req, res) => {
    const { tenPhong = "", khach = 0, phongNgu = 0, giuong = 0, phongTam = 0, moTa = '', giaTien = 0, mayGiat = true, banLa = true, tivi = true, dieuHoa = true, wifi = true, bep = true, doXe = true, hoBoi = true, banUi = true, maViTri = 0, hinhAnh = "" } = req.body;
    try {
        const newRoom = await room_1.default.create({
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
        });
        return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toRoomResponseDTo)(newRoom), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.createRoom = createRoom;
const updateRoomById = async (req, res) => {
    const { id } = req.params;
    const { tenPhong = "", khach = 0, phongNgu = 0, giuong = 0, phongTam = 0, moTa = '', giaTien = 0, mayGiat = true, banLa = true, tivi = true, dieuHoa = true, wifi = true, bep = true, doXe = true, hoBoi = true, banUi = true, maViTri = 0, hinhAnh = "" } = req.body;
    try {
        const updateRoom = await room_1.default.findOne({ where: { id } });
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
            });
            await updateRoom.save();
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toRoomResponseDTo)(updateRoom), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, (0, mapper_helper_1.toRoomResponseDTo)(updateRoom), 404);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.updateRoomById = updateRoomById;
const deleteRoomById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRoom = await room_1.default.destroy({ where: { id } });
        if (deleteRoom) {
            return handler_helper_1.ResponseHandler.success(res, deleteRoom, 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, deleteRoom, 400);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.deleteRoomById = deleteRoomById;
const uploadPhotoRoomById = async (req, res) => {
    const { maPhong } = req.query;
    const { file } = req;
    try {
        const urlImage = `${process.env.BASE_URL}/${file?.path}`;
        const uploadPhotoRoom = await room_1.default.findOne({ where: { id: maPhong } });
        if (uploadPhotoRoom) {
            uploadPhotoRoom.set({
                photo: urlImage
            });
            await uploadPhotoRoom.save();
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toRoomResponseDTo)(uploadPhotoRoom), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, null, 404);
        }
    }
    catch (error) {
        console.log("FF", error);
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.uploadPhotoRoomById = uploadPhotoRoomById;
