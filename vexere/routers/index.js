const express = require('express');
const { stationRouter } = require('./station.routers');
const { userRouter } = require('./user.routers');
const { tripRouter } = require('./trip.routers');
const { fingerPrintRouter } = require('./fingerprint');

const router = express.Router();

router.use("/stations", stationRouter);
router.use("/users", userRouter);
router.use("/trips", tripRouter);
router.use("/finger-print", fingerPrintRouter);

module.exports = router