"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("./models");
//1. khởi tạo express js
const app = (0, express_1.default)();
//2. khởi tạo port
const port = 3000;
//3. kiểm tra server thành công chưa
app.listen(port, async () => {
    console.log(`Server is running port ${3000}`);
    try {
        //4. kiểm tra kết nối với database
        await models_1.sequelize.authenticate();
        console.log('kết nối database thành công');
    }
    catch (error) {
        console.log('kết nối thất bại');
        console.log(error);
    }
});
