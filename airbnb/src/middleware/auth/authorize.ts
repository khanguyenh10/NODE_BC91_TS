
import { Request, Response, NextFunction } from "express"
import { ResponseHandler } from "../../helper/handler-helper"
import { AuthenticatedReq } from "../../dto/user.dto";
export const authorize = (req: AuthenticatedReq, res: Response, next: NextFunction) => {
    try {
        const { user } = req;
        console.log(user);
        if (['ADMIN'].findIndex(author => author == user.type) > -1) {
            next();
        } else {
            return ResponseHandler.error(res, 'You are logged in , but unauthorized', 403);
        }
    } catch (error) {
        return ResponseHandler.error(res, 'You are logged in , but unauthorized', 403);
    }
}