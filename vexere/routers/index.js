const express = require('express');
const { stationRouter } = require('./station.routers');
const { userRouter } = require('./user.routers');

const router = express.Router();

router.use("/stations", stationRouter);
router.use("/users", userRouter);

module.exports = router