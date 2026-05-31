const express = require('express');
const { register, login, uploadAvatar, getAllTrip } = require('../controllers/user.controllers');
const { uploadImage } = require('../middewares/upload/upload-image');
const { authenticate } = require('../middewares/auth/authenticate');

const userRouter = express.Router();

userRouter.post('/register', register)
userRouter.post('/login', login);


//upload file
userRouter.post("/upload-avatar", authenticate, uploadImage("avatars"), uploadAvatar);

userRouter.get('/all-trip', getAllTrip);

module.exports = {
    userRouter
}