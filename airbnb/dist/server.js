"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // This must run BEFORE any code that uses process.env
const app_1 = __importDefault(require("./app"));
//0. env
//2. khởi tạo port
const port = process.env.PORT || 3001;
//3. kiểm tra server thành công chưa
app_1.default.listen(port, async () => {
    console.log(`Server is running port ${port}`);
});
