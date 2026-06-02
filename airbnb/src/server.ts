import express from "express";
import { sequelize } from "./models";

//1. khởi tạo express js
const app = express();
//2. khởi tạo port
const port = 3000;
//3. kiểm tra server thành công chưa
app.listen(port, async () => {
    console.log(`Server is running port ${3000}`);
    try {
        //4. kiểm tra kết nối với database
        await sequelize.authenticate();
        console.log('kết nối database thành công');
    } catch (error) {
        console.log('kết nối thất bại');
        console.log(error);
    }
})