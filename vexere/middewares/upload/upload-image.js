const { mkdirp } = require('mkdirp');
const multer = require('multer');

const uploadImage = (type) => {
    const made = mkdirp.sync(`./public/images/${type}`); // tạo thư mục động
    //upload file
    const storage = multer.diskStorage({
        destination: (res, file, cb) => {
            cb(null, `./public/images/${type}`)  // setup chỗ cần lưu file
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
    return upload.single('formFile');
}

module.exports = {
    uploadImage
}