import express from "express";
import { sequelize } from "./models";
import router from "./routers";
import path from "path";
import dotenv from 'dotenv';

//0. env
dotenv.config(); // This must run BEFORE any code that uses process.env

//1. khởi tạo express js
const app = express();

//2.2 parse res to json
app.use(express.json());

//2.3 cài static file
const publicPathDirectory = path.join(__dirname, "../public");
app.use("/public", express.static(publicPathDirectory));

//3. kiểm tra server thành công chưa
async function checkConnectSequelize() {
    try {
        //4. kiểm tra kết nối với database
        await sequelize.authenticate();
        console.log('kết nối database thành công');
    } catch (error) {
        console.log('kết nối thất bại');
        console.log(error);
    }
}
checkConnectSequelize();
//5. set up router
app.use("/api/v1", router);


export default app;
