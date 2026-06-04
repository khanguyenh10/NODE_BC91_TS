import { toLocationResponseDTo } from './../helper/mapper-helper';
import { Request, Response } from "express"
import { CreateLocationDTO, LocationResponseDTO, UpdateLocationDTO } from "../dto/location.dto"
import Location from "../models/location"
import { ApiResponse, SearchPaginationQueryRequest } from "../dto/api.dto";
import { ResponseHandler } from "../helper/handler-helper";
import { Op } from 'sequelize';
const getLocationList = async (req: Request, res: Response<LocationResponseDTO>) => {
    try {
        const locations = await Location.findAll({ raw: true });
        console.log(locations);
        return ResponseHandler.success(res, locations.map(toLocationResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getLocationListSearchPagination = async (req: Request<{}, {}, {}, SearchPaginationQueryRequest>, res: Response<LocationResponseDTO[]>) => {
    const { pageIndex = 1, pageSize = 2, keyword = '' } = req.query;
    try {
        const offset = (pageIndex - 1) * pageSize;
        const locations = await Location.findAll(
            {
                where: {
                    name: {
                        [Op.like]: `%${keyword}%`
                    },
                },
                limit: pageSize,
                offset,
                raw: true
            },)
        console.log(pageIndex, pageSize, keyword, locations)
        return ResponseHandler.success(res, locations.map(toLocationResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getLocationDetailById = async (req: Request<{ id: number }>, res: Response<LocationResponseDTO>) => {
    const { id } = req.params;
    try {
        const location = await Location.findOne({ where: { id } });
        if (location) {
            return ResponseHandler.success(res, toLocationResponseDTo(location), 200);
        } else {
            return ResponseHandler.error(res, null, 404, "Not Found");
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const createLocation = async (req: Request<{}, {}, CreateLocationDTO>, res: Response<ApiResponse<LocationResponseDTO>>) => {
    const { tenViTri = '', tinhThanh = '', quocGia = '', hinhAnh = '' } = req.body;
    try {
        const newLocation = await Location.create({
            name: tenViTri,
            province: tinhThanh,
            country: quocGia,
            photo: hinhAnh
        })
        return ResponseHandler.success(res, toLocationResponseDTo(newLocation), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const updateLocationById = async (req: Request<{ id: number }, {}, UpdateLocationDTO>, res: Response<ApiResponse<LocationResponseDTO>>) => {
    const { id } = req.params;
    const { tenViTri = '', tinhThanh = "", quocGia = "", hinhAnh = "" } = req.body;
    try {
        const updateLocation = await Location.findOne({ where: { id } })
        if (updateLocation) {
            updateLocation.set({
                name: tenViTri,
                province: tinhThanh,
                country: quocGia,
                photo: hinhAnh
            })
            await updateLocation.save();
            return ResponseHandler.success(res, toLocationResponseDTo(updateLocation), 200);
        } else {
            return ResponseHandler.error(res, toLocationResponseDTo(updateLocation), 404, "Not Found");
        }

    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const deleteLocationById = async (req: Request<{ id: number }>, res: Response) => {
    const { id } = req.params;
    try {
        const deleteLocation = await Location.destroy({ where: { id } });
        if (deleteLocation) {
            return ResponseHandler.success(res, deleteLocation, 200);
        } else {
            return ResponseHandler.error(res, deleteLocation, 400);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}

export { getLocationList, getLocationListSearchPagination, getLocationDetailById, createLocation, updateLocationById, deleteLocationById }