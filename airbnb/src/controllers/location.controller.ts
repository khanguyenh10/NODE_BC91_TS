import { Request, Response } from "express"
import { LocationReqBody } from "../dto/location.dto"
import Location from "../models/location"
const getLocationList = async (req: Request, res: Response) => {
    try {
        const locations = await Location.findAll();
        return res.status(200).send(locations);
    } catch (error) {
        return res.status(500).send(error);
    }
}
const getLocationListSearchPagination = () => {

}
const getLocationDetailById = async (req: Request<{ id: number }>, res: Response) => {
    const { id } = req.params;
    try {
        const location = await Location.findOne({ where: { id } });
        return res.status(500).send(location);
    } catch (error) {
        return res.status(500).send(error);
    }
}
const createLocation = async (req: Request<{}, {}, LocationReqBody>, res: Response) => {
    const { name, province, country, photo } = req.body;
    try {
        const newLocation = await Location.create({
            name,
            province,
            country,
            photo
        })
        return res.status(201).send(newLocation);
    } catch (error) {
        return res.status(500).send(error);
    }
}
const updateLocationById = async (req: Request<{ id: number }, {}, LocationReqBody>, res: Response) => {
    const { id } = req.params;
    const { name, province, country, photo } = req.body;
    try {
        const updateLocation = await Location.update({
            name,
            province,
            country,
            photo
        }, {
            where: { id }
        })
        return res.status(200).send(updateLocation);
    } catch (error) {
        return res.status(500).send(error);
    }
}
const deleteLocationById = async (req: Request<{ id: number }>, res: Response) => {
    const { id } = req.params;
    try {
        const deleteLocation = await Location.destroy({ where: { id } });
        return res.status(200).send(deleteLocation);
    } catch (error) {
        return res.status(500).send(error);
    }
}

export { getLocationList, getLocationListSearchPagination, getLocationDetailById, createLocation, updateLocationById, deleteLocationById }