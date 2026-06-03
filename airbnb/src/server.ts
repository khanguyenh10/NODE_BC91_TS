import express from "express";
import { sequelize } from "./models";
import router from "./routers";

//1. khởi tạo express js
const app = express();
//2. khởi tạo port
const port = 3000;
//2.2 parse res to json
app.use(express.json());
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
//5. set up router
app.use("/api/v1", router);

