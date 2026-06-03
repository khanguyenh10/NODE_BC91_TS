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
        return res.status(statusCode).json({
            statusCode,
            message,
            content,
            dateTime: new Date().toISOString()
        })
    }
}
