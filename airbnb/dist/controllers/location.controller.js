"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPhotoLocationById = exports.deleteLocationById = exports.updateLocationById = exports.createLocation = exports.getLocationDetailById = exports.getLocationListSearchPagination = exports.getLocationList = void 0;
const mapper_helper_1 = require("./../helper/mapper-helper");
const handler_helper_1 = require("../helper/handler-helper");
const sequelize_1 = require("sequelize");
const location_1 = __importDefault(require("../models/location"));
const getLocationList = async (req, res) => {
    try {
        const locations = await location_1.default.findAll();
        return handler_helper_1.ResponseHandler.success(res, locations.map(mapper_helper_1.toLocationResponseDTo), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getLocationList = getLocationList;
const getLocationListSearchPagination = async (req, res) => {
    const { pageIndex = 1, pageSize = 2, keyword = '' } = req.query;
    try {
        const offset = (pageIndex - 1) * pageSize;
        const locations = await location_1.default.findAndCountAll({
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
            totalRow: locations.count,
            keyword,
            data: locations.rows.map(mapper_helper_1.toLocationResponseDTo)
        };
        return handler_helper_1.ResponseHandler.success(res, dataResponse, 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getLocationListSearchPagination = getLocationListSearchPagination;
const getLocationDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const location = await location_1.default.findOne({ where: { id } });
        if (location) {
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toLocationResponseDTo)(location), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, null, 404);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getLocationDetailById = getLocationDetailById;
const createLocation = async (req, res) => {
    const { tenViTri = '', tinhThanh = '', quocGia = '', hinhAnh = '' } = req.body;
    try {
        const newLocation = await location_1.default.create({
            name: tenViTri,
            province: tinhThanh,
            country: quocGia,
            photo: hinhAnh
        });
        return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toLocationResponseDTo)(newLocation), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.createLocation = createLocation;
const updateLocationById = async (req, res) => {
    const { id } = req.params;
    const { tenViTri = '', tinhThanh = "", quocGia = "", hinhAnh = "" } = req.body;
    try {
        const updateLocation = await location_1.default.findOne({ where: { id } });
        if (updateLocation) {
            updateLocation.set({
                name: tenViTri,
                province: tinhThanh,
                country: quocGia,
                photo: hinhAnh
            });
            await updateLocation.save();
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toLocationResponseDTo)(updateLocation), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, (0, mapper_helper_1.toLocationResponseDTo)(updateLocation), 404);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.updateLocationById = updateLocationById;
const deleteLocationById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteLocation = await location_1.default.destroy({ where: { id } });
        if (deleteLocation) {
            return handler_helper_1.ResponseHandler.success(res, deleteLocation, 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, deleteLocation, 400);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.deleteLocationById = deleteLocationById;
const uploadPhotoLocationById = async (req, res) => {
    const { maViTri } = req.query;
    const { file } = req;
    try {
        const urlImage = `${process.env.BASE_URL}/${file?.path}`;
        const uploadPhotoLocation = await location_1.default.findOne({ where: { id: maViTri } });
        if (uploadPhotoLocation) {
            uploadPhotoLocation.set({
                photo: urlImage
            });
            await uploadPhotoLocation.save();
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toLocationResponseDTo)(uploadPhotoLocation), 200);
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
exports.uploadPhotoLocationById = uploadPhotoLocationById;
