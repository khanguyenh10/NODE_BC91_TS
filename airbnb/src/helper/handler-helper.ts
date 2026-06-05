import { Response } from "express";
export class ResponseHandler {
    static success<T>(
        res: Response,
        content: T,
        statusCode: number,
        message = "Success",
    ) {
        return res.status(statusCode).json({
            statusCode,
            content,
            dateTime: new Date().toISOString(),
            message
        })
    }
    static error<T>(
        res: Response,
        content: T,
        statusCode: number,
        message = "Error",
    ) {
        const errorDetails = content as any;
        // TỰ ĐỘNG BẮT LỖI TRÙNG LẶP CỦA SEQUELIZE
        if (errorDetails.name === 'SequelizeUniqueConstraintError') {
            statusCode = 400; // Chuyển từ 500 thành 400 vì đây là lỗi do Client gửi dữ liệu trùng
            message = errorDetails.errors[0].message; // Lấy câu "Email has registered"
        }
        return res.status(statusCode).json({
            statusCode,
            message,
            content,
            dateTime: new Date().toISOString()
        })
    }
}
