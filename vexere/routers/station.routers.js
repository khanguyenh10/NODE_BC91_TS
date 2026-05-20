const express = require('express');
const { createStation, getStationList, updateStationById, deleteStationById, getStationDetailById } = require('../controllers/station.controllers');
const { getStudentDetailById } = require('../../studentmanage/app/controllers/student.controllers');
const { authenticate } = require('../middewares/auth/authenticate');
const { authorize } = require('../middewares/auth/authorize');

const stationRouter = express.Router();

stationRouter.get("/", getStationList);
stationRouter.get("/:id", getStationDetailById)
stationRouter.post("/", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), createStation);
stationRouter.put("/:id", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), updateStationById)
stationRouter.delete("/:id", authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), deleteStationById)


module.exports = {
    stationRouter
}