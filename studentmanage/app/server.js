const express = require('express');

const app = express(); // tạo ứng dụng express
const port = 7000;
const router = require('./routers/index');

const { Sequelize, DataTypes } = require('sequelize');



// chuyển req, res thành json
app.use(express.json());

//http://localhost:7000/ => Hello World
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use(router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


// set up sequelize
const { sequelize } = require('./model');
sequelize.sync({ alter: true }); // đồng bộ model với database, nếu có sự thay đổi về cấu trúc bảng thì sẽ tự động cập nhật lại bảng đó trong database
