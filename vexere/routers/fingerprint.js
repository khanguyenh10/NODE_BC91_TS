const express = require('express');

const fingerPrintRouter = express.Router();

fingerPrintRouter.get("/", (req, res) => {
    console.log(req.fingerprint);
    res.status(200).send(req.fingerprint);
})
module.exports = {
    fingerPrintRouter
}