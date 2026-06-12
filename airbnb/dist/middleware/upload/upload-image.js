"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const mkdirp_1 = require("mkdirp");
const multer_1 = __importDefault(require("multer"));
const uploadImage = (type) => {
    const makeDirAuto = mkdirp_1.mkdirp.sync(`./public/images/${type}`);
    //1. tạo nơi lưu trữ và định dạng lại file name
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `./public/images/${type}`);
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "_" + file.originalname);
        }
    });
    const upload = (0, multer_1.default)({
        storage, // upload file thư mục lưu trữ ,
        limits: {
            fieldSize: 1 * 1024 * 1024
        },
        fileFilter: (res, file, cb) => {
            // filter chỉ nhận vào file hình
            const extensionImageList = [".png", ".jpg"];
            const extension = file.originalname.split(".").pop();
            const check = extensionImageList.includes(`.${extension}`);
            if (check) {
                cb(null, true);
            }
            else {
                cb(new Error("Extension ko hợp lệ"));
            }
        }
    });
    return upload.single("formFile");
};
exports.uploadImage = uploadImage;
