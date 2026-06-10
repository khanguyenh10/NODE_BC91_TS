"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const handler_helper_1 = require("../../helper/handler-helper");
const authorize = (req, res, next) => {
    try {
        const { user } = req;
        console.log(user);
        if (['ADMIN'].findIndex(author => author == user.type) > -1) {
            next();
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, 'You are logged in , but unauthorized', 403);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, 'You are logged in , but unauthorized', 403);
    }
};
exports.authorize = authorize;
