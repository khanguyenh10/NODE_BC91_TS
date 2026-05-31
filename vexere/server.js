const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const Fingerprint = require('express-fingerprint');
const app = express(); // tạo ứng dụng express

//cài ứng dụng sử dụng kiểu json
app.use(express.json());



// cài đặt fingerprint
app.use(Fingerprint());

// cài đặt static file
const publicPathDirectory = path.join(__dirname, './public');
app.use("/public", express.static(publicPathDirectory));

// // cài đặt router
const router = require('./routers/index');

app.use("/api/v1", router);

const port = 3000;

app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    try {
        await sequelize.authenticate(); // kiểm tra kết nối đến database
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
})


