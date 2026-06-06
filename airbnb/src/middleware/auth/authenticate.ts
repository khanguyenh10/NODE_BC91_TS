import jwt from 'jsonwebtoken';

import { NextFunction, Request, Response } from "express"
import { ResponseHandler } from "../../helper/handler-helper"
import { AuthenticatedReq } from '../../dto/user.dto';



export const authenticate = (req: AuthenticatedReq, res: Response, next: NextFunction) => {
    try {
        const token = req.header("token");
        const decode = jwt.verify(token as string, process.env.SECRET_KEY as string);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        return ResponseHandler.error(res, "You are not logged in", 401);
    }
}