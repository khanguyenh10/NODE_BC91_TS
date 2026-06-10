import app from "./app";
//2. khởi tạo port
const port = process.env.port || 3000;


//3. kiểm tra server thành công chưa
app.listen(port, async () => {
    console.log(`Server is running port ${3000}`);

})
