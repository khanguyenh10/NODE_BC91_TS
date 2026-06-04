import { Request, Response } from "express"
import { RegisterReq, UserRes } from "../dto/user.dto"
import { ResponseHandler } from "../helper/handler-helper"
import User from "../models/user";
import { getAvatar } from "../helper/avatar-helper";
import bcrypt from "bcryptjs";
import { toBoolean } from "../helper/text-helper";
const register = async (req: Request<{}, {}, RegisterReq>, res: Response<UserRes>) => {
    const { name = '', email = '', password = '', phone = "", gender = true, role = '', birthday = '' } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (user) {
            return ResponseHandler.error(res, "This email has registed", 400);
        }
        // gen ảnh avatar động
        const avatarUrl = getAvatar(email);
        //tạo password mã hóa
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
            phone,
            gender: true,
            role,
            avatar: avatarUrl,
            birthday: new Date(birthday)
        })

        return ResponseHandler.success(res, newUser, 201);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}

const login = (req: Request, res: Response) => {


}
export { register, login }