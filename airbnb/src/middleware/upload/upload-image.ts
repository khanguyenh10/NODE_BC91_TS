import { mkdirp } from "mkdirp"
import multer from "multer"

const uploadImage = (type: string) => {
    const makeDirAuto = mkdirp.sync(`./public/images/${type}`);
    //1. tạo nơi lưu trữ và định dạng lại file name
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `./public/images/${type}`)
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "_" + file.originalname);
        }
    })
    const upload = multer({
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
            } else {
                cb(new Error("Extension ko hợp lệ"))
            }
        }
    })
    return upload.single("formFile");
}
export { uploadImage }