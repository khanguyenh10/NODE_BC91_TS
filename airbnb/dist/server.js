"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
//2. khởi tạo port
const port = process.env.port || 3000;
//3. kiểm tra server thành công chưa
app_1.default.listen(port, async () => {
    console.log(`Server is running port ${3000}`);
});
