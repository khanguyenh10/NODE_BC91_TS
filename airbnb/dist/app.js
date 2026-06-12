"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("./models");
const routers_1 = __importDefault(require("./routers"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
//0. env
dotenv_1.default.config(); // This must run BEFORE any code that uses process.env
//1. khởi tạo express js
const app = (0, express_1.default)();
//2.2 parse res to json
app.use(express_1.default.json());
//2.3 cài static file
const publicPathDirectory = path_1.default.join(__dirname, "../public");
app.use("/public", express_1.default.static(publicPathDirectory));
//3. kiểm tra server thành công chưa
async function checkConnectSequelize() {
    try {
        //4. kiểm tra kết nối với database
        await models_1.sequelize.authenticate();
        console.log('kết nối database thành công');
    }
    catch (error) {
        console.log('kết nối thất bại');
        console.log(error);
    }
}
checkConnectSequelize();
//5. set up router
app.use("/api/v1", routers_1.default);
exports.default = app;
