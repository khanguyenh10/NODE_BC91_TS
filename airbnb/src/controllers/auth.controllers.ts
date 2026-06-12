import { Request, Response } from "express"
import { LoginReq, RegisterReq, UserRes } from "../dto/user.dto"
import { ResponseHandler } from "../helper/handler-helper"
import { getAvatar } from "../helper/avatar-helper";
import bcrypt from "bcryptjs";
import { isPassword, toBoolean } from "../helper/text-helper";
import { toUserResponseDTo } from "../helper/mapper-helper";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { ApiRes } from "../dto/api.dto";

const register = async (req: Request<{}, {}, RegisterReq>, res: Response<ApiRes<any>>) => {
    const { name = '', email = '', password = '', phone = "", gender = true, role = '', birthday = '' } = req.body;
    try {
        // gen ảnh avatar động
        const avatarUrl = getAvatar(email);
        //tạo password mã hóa
        if (!isPassword(password)) {
            return ResponseHandler.error(res, 'Password >= 6 characters , including uppercase, lowercase, number', 400);
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
            phone,
            gender: toBoolean(gender),
            role,
            avatar: avatarUrl,
            birthday: new Date(birthday)
        })
        return ResponseHandler.success(res, toUserResponseDTo(newUser), 201);
    } catch (error) {
        console.log("error", error)
        return ResponseHandler.error(res, error, 500);
    }
}

const login = async (req: Request<{}, {}, LoginReq>, res: Response<ApiRes<any>>) => {
    const { email, password } = req.body
    try {
        // kiểm tra email có tồn tại ko
        const user = await User.findOne({ where: { email }, raw: true },);
        console.log(user, email, password)
        if (user) {
            const isAuth = await bcrypt.compare(password, user.password);
            if (isAuth) {
                const token = jwt.sign({ email: user.email, type: user.role }, process.env.SECRET_KEY as string, { expiresIn: 60 * 5 }) // 5 phút
                const userResponse = {
                    user: { ...user },
                    token
                }
                return ResponseHandler.success(res, userResponse, 200);
            } else {
                ResponseHandler.error(res, 'Email and password doesnot match', 400);
            }
        } else {
            ResponseHandler.error(res, 'User hasnot registered', 400);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}






export { register, login }