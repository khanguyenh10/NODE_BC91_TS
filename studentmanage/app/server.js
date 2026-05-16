const express = require('express');

const app = express(); // tạo ứng dụng express
const port = 7000;
const router = require('./routers/index');

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