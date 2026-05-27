const express = require('express');
const { register, login } = require('../controllers/user.controllers');
const multer = require('multer');

const userRouter = express.Router();

userRouter.post('/register', register)
userRouter.post('/login', login);

//upload file
const storage = multer.diskStorage({
    destination: (res, file, cb) => {
        cb(null, "./public/images/avatars")  // setup chỗ cần lưu file
    },
    filename: (res, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname); // đặt lại tên cho file
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 1024 * 1024 // 1MB
    },
    fileFilter: (res, file, cb) => {
        // filter chỉ nhận vào file hình
        const extensionImageList = [".png", ".jpg"];
        const extension = file.originalname.split(".").pop();
        const check = extensionImageList.includes(`.${extension}`);
        if (check) {
            cb(null, true);
        } else {
            cb(new Error("Extension ko hợp lệ"))
        }
    }
});

userRouter.post("/upload-avatar", upload.single(
    "formFile"
), (req, res) => {
    res.send("Tính năng upload File run")
})
module.exports = {
    userRouter
}