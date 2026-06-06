import { toLocationResponseDTo } from './../helper/mapper-helper';
import { Request, Response } from "express"
import { ResponseHandler } from "../helper/handler-helper";
import { Op } from 'sequelize';
import { CreateLocationReq, LocationIdQueryReq, LocationRes, UpdateLocationReq } from '../dto/location.dto';
import { ApiRes, SearchPagingQueryReq, SearchPagingRes } from '../dto/api.dto';
import Location from '../models/location';
const getLocationList = async (req: Request, res: Response<ApiRes<any>>) => {
    try {
        const locations = await Location.findAll();
        return ResponseHandler.success(res, locations.map(toLocationResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getLocationListSearchPagination = async (req: Request<{}, {}, {}, SearchPagingQueryReq>, res: Response<ApiRes<any>>) => {
    const { pageIndex = 1, pageSize = 2, keyword = '' } = req.query;
    try {
        const offset = (pageIndex - 1) * pageSize;
        const locations = await Location.findAndCountAll(
            {
                where: {
                    name: {
                        [Op.like]: `%${keyword}%`
                    },
                },
                limit: +pageSize,
                offset: +offset,
            },)
        const dataResponse: SearchPagingRes<LocationRes[]> = {
            pageIndex: +pageIndex,
            pageSize: +pageSize,
            totalRow: locations.count,
            keyword,
            data: locations.rows.map(toLocationResponseDTo)
        }
        return ResponseHandler.success(res, dataResponse, 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getLocationDetailById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    try {
        const location = await Location.findOne({ where: { id } });
        if (location) {
            return ResponseHandler.success(res, toLocationResponseDTo(location), 200);
        } else {
            return ResponseHandler.error(res, null, 404);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const createLocation = async (req: Request<{}, {}, CreateLocationReq>, res: Response<ApiRes<any>>) => {
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
const updateLocationById = async (req: Request<{ id: string }, {}, UpdateLocationReq>, res: Response<ApiRes<any>>) => {
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
            return ResponseHandler.error(res, toLocationResponseDTo(updateLocation), 404);
        }

    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const deleteLocationById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
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
const uploadPhotoLocationById = async (req: Request, res: Response<ApiRes<any>>) => {
    const { maViTri } = req.query as unknown as LocationIdQueryReq;
    const { file } = req;
    try {
        const urlImage = `${process.env.BASE_URL}/${file?.path}`;
        const uploadPhotoLocation = await Location.findOne({ where: { id: maViTri } });
        if (uploadPhotoLocation) {
            uploadPhotoLocation.set({
                photo: urlImage
            });
            await uploadPhotoLocation.save();
            return ResponseHandler.success(res, toLocationResponseDTo(uploadPhotoLocation), 200)
        } else {
            return ResponseHandler.error(res, null, 404);
        }
    } catch (error) {
        console.log("FF", error);
        return ResponseHandler.error(res, error, 500);
    }
}
export { getLocationList, getLocationListSearchPagination, getLocationDetailById, createLocation, updateLocationById, deleteLocationById, uploadPhotoLocationById }