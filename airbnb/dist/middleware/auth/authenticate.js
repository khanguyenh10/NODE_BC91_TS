"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const handler_helper_1 = require("../../helper/handler-helper");
const authenticate = (req, res, next) => {
    try {
        const token = req.header("token");
        const decode = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        req.user = {};
        next();
    }
    catch (error) {
        console.log(error);
        return handler_helper_1.ResponseHandler.error(res, error, 401);
    }
};
exports.authenticate = authenticate;
