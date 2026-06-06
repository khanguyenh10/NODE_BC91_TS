"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandler = void 0;
class ResponseHandler {
    static success(res, content, statusCode = 500) {
        return res.status(statusCode).json({
            statusCode,
            content,
            dateTime: new Date().toISOString(),
        });
    }
    static error(res, errors, statusCode) {
        const errorDetails = errors;
        let message = "Error";
        let content = errors;
        if (errorDetails.name === 'SequelizeUniqueConstraintError' ||
            errorDetails.name === 'SequelizeValidationError') {
            statusCode = 400;
            content = errorDetails.errors[0].message;
        }
        switch (statusCode) {
            case 404:
                message = "Not found";
                break;
            case 400:
                message = "Request is not valid";
            default:
                break;
        }
        return res.status(statusCode).json({
            statusCode,
            message,
            content,
            dateTime: new Date().toISOString()
        });
    }
}
exports.ResponseHandler = ResponseHandler;
