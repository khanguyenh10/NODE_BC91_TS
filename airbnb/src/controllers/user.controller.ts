import { toUserResponseDTo } from './../helper/mapper-helper';
import bcrypt from 'bcryptjs';
import { Request, Response } from "express"
import { ResponseHandler } from "../helper/handler-helper";
import { Op } from 'sequelize';
import { LocationIdQueryReq, UpdateLocationReq } from '../dto/location.dto';
import { ApiRes, SearchPagingQueryReq, SearchPagingRes } from '../dto/api.dto';
import User from "../models/user";
import { AuthenticatedReq, RegisterReq, UpdateUserReq, UserRes } from "../dto/user.dto";
import { getAvatar } from "../helper/avatar-helper";
import { isPassword, toBoolean } from "../helper/text-helper";

const getUserList = async (req: Request, res: Response<ApiRes<any>>) => {
    try {
        const users = await User.findAll();
        return ResponseHandler.success(res, users.map(toUserResponseDTo), 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getUserListSearchPagination = async (req: Request<{}, {}, {}, SearchPagingQueryReq>, res: Response<any>) => {
    const { pageIndex = 1, pageSize = 2, keyword = '' } = req.query;
    try {
        const offset = (pageIndex - 1) * pageSize;
        const users = await User.findAndCountAll(
            {
                where: {
                    name: {
                        [Op.like]: `%${keyword}%`
                    },
                },
                limit: +pageSize,
                offset: +offset,
            },)
        const dataResponse: SearchPagingRes<UserRes[]> = {
            pageIndex: +pageIndex,
            pageSize: +pageSize,
            totalRow: users.count,
            keyword,
            data: users.rows.map(toUserResponseDTo)
        }
        return ResponseHandler.success(res, dataResponse, 200);
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const getUserDetailById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({ where: { id } });
        if (user) {
            return ResponseHandler.success(res, toUserResponseDTo(user), 200);
        } else {
            return ResponseHandler.error(res, null, 404);
        }
    } catch (error) {
        console.log(error);
        return ResponseHandler.error(res, error, 500);
    }
}
const createUser = async (req: Request<{}, {}, RegisterReq>, res: Response<ApiRes<any>>) => {
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
const updateUserById = async (req: Request<{ id: string }, {}, UpdateUserReq>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    const { name = '', email = '', phone = "", gender = true, role = '', birthday = '' } = req.body;
    try {
        const updateUser = await User.findOne({ where: { id } });
        if (updateUser) {
            updateUser.set({
                name: name,
                email: email,
                phone: phone,
                gender: toBoolean(gender),
                role: role ? role : updateUser?.dataValues.role,
                birthday: new Date(birthday)
            })
            await updateUser.save();
            return ResponseHandler.success(res, toUserResponseDTo(updateUser), 200);
        } else {
            return ResponseHandler.error(res, null, 404);
        }

    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const deleteUserById = async (req: Request<{ id: string }>, res: Response<ApiRes<any>>) => {
    const { id } = req.params;
    try {
        const deleteUser = await User.destroy({ where: { id } });
        if (deleteUser) {
            return ResponseHandler.success(res, deleteUser, 200);
        } else {
            return ResponseHandler.error(res, deleteUser, 400);
        }
    } catch (error) {
        return ResponseHandler.error(res, error, 500);
    }
}
const uploadAvatar = async (req: AuthenticatedReq, res: Response<ApiRes<any>>) => {
    const { user } = req;
    const { file } = req;
    try {
        const urlImage = `${process.env.BASE_URL}/${file?.path}`;
        const uploadAvatarUser = await User.findOne({ where: { email: user.email } });
        if (uploadAvatarUser) {
            uploadAvatarUser.set({
                avatar: urlImage
            });
            await uploadAvatarUser.save();
            return ResponseHandler.success(res, toUserResponseDTo(uploadAvatarUser), 200)
        } else {
            return ResponseHandler.error(res, null, 404);
        }
    } catch (error) {
        console.log("FF", error);
        return ResponseHandler.error(res, error, 500);
    }
}
export { getUserList, getUserListSearchPagination, getUserDetailById, createUser, updateUserById, deleteUserById, uploadAvatar }