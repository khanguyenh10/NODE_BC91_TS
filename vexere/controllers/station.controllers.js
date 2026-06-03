
const { Op } = require("sequelize");
const { Station } = require("../models");

const getStationList = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const stations = await Station.findAll({
                where:
                {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            return res.status(200).send(stations);
        } else {
            const stations = await Station.findAll();
            return res.status(200).send(stations);
        }

    } catch (error) {
        return res.status(500).send(error)
    }

}
const getStationDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const station = await Station.findOne({ where: { id } });
        if (station) {
            return res.status(200).send(station);
        } else {
            return res.status(400).send('Not found');
        }
    } catch (error) {
        return res.status(500).send(error)
    }

}

const createStation = async (req, res) => {
    const { name, address, province } = req.body;
    try {
        const newStation = await Station.create({ name, address, province });
        console.log("newStation", newStation)
        return res.status(201).send(newStation);
    } catch (error) {
        return res.status(500).send(error)
    }

}
const updateStationById = async (req, res) => {
    const { id } = req.params;
    const { name, address, province } = req.body;
    try {
        const stationUpdate = await Station.findOne({ where: { id } });
        if (stationUpdate) {
            stationUpdate.name = name;
            stationUpdate.address = address;
            stationUpdate.province = province;
            const stationUpdated = await stationUpdate.save();
            return res.status(200).send(stationUpdated);
        } else {
            return res.status(400).send('Not found');
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}
const deleteStationById = async (req, res) => {
    const { id } = req.params;
    const { name, address, province } = req.body;
    try {
        await stationDelete.destroy({ where: { id } });
        return res.status(200).send("Xóa thành công");
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    createStation,
    getStationList,
    getStationDetailById,
    updateStationById,
    deleteStationById
}