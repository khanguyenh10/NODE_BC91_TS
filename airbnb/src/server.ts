import dotenv from 'dotenv';
dotenv.config(); // This must run BEFORE any code that uses process.env

import app from "./app";
//0. env
//2. khởi tạo port
const port = process.env.PORT || 3001;


//3. kiểm tra server thành công chưa
app.listen(port, async () => {
    console.log(`Server is running port ${port}`);

})
