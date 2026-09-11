"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAvatar = exports.deleteUserById = exports.updateUserById = exports.createUser = exports.getUserDetailById = exports.getUserListSearchPagination = exports.getUserList = void 0;
const mapper_helper_1 = require("./../helper/mapper-helper");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const handler_helper_1 = require("../helper/handler-helper");
const sequelize_1 = require("sequelize");
const user_1 = __importDefault(require("../models/user"));
const avatar_helper_1 = require("../helper/avatar-helper");
const text_helper_1 = require("../helper/text-helper");
const getUserList = async (req, res) => {
    try {
        const users = await user_1.default.findAll();
        return handler_helper_1.ResponseHandler.success(res, users.map(mapper_helper_1.toUserResponseDTo), 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getUserList = getUserList;
const getUserListSearchPagination = async (req, res) => {
    const { pageIndex = 1, pageSize = 2, keyword = '' } = req.query;
    try {
        const offset = (pageIndex - 1) * pageSize;
        const users = await user_1.default.findAndCountAll({
            where: {
                name: {
                    [sequelize_1.Op.like]: `%${keyword}%`
                },
            },
            limit: +pageSize,
            offset: +offset,
        });
        const dataResponse = {
            pageIndex: +pageIndex,
            pageSize: +pageSize,
            totalRow: users.count,
            keyword,
            data: users.rows.map(mapper_helper_1.toUserResponseDTo)
        };
        return handler_helper_1.ResponseHandler.success(res, dataResponse, 200);
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getUserListSearchPagination = getUserListSearchPagination;
const getUserDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await user_1.default.findOne({ where: { id } });
        if (user) {
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toUserResponseDTo)(user), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, null, 404);
        }
    }
    catch (error) {
        console.log(error);
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.getUserDetailById = getUserDetailById;
const createUser = async (req, res) => {
    const { name = '', email = '', password = '', phone = "", gender = true, role = '', birthday = '' } = req.body;
    try {
        // gen ảnh avatar động
        const avatarUrl = (0, avatar_helper_1.getAvatar)(email);
        //tạo password mã hóa
        if (!(0, text_helper_1.isPassword)(password)) {
            return handler_helper_1.ResponseHandler.error(res, 'Password >= 6 characters , including uppercase, lowercase, number', 400);
        }
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hashPassword = bcryptjs_1.default.hashSync(password, salt);
        const newUser = await user_1.default.create({
            name,
            email,
            password: hashPassword,
            phone,
            gender: (0, text_helper_1.toBoolean)(gender),
            role,
            avatar: avatarUrl,
            birthday: new Date(birthday)
        });
        return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toUserResponseDTo)(newUser), 201);
    }
    catch (error) {
        console.log("error", error);
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.createUser = createUser;
const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name = '', email = '', password = '', phone = "", gender = true, role = '', birthday = '' } = req.body;
    console.log("sasasas");
    // try {
    //     const updateUser = await User.findOne({ where: { id } })
    //     if (updateUser) {
    //         //tạo password mã hóa
    //         if (!isPassword(password)) {
    //             return ResponseHandler.error(res, 'Password >= 6 characters , including uppercase, lowercase, number', 400);
    //         }
    //         const salt = bcrypt.genSaltSync(10);
    //         const hashPassword = bcrypt.hashSync(password, salt);
    //         updateUser.set({
    //             name: name,
    //             email: email,
    //             password: password ? hashPassword : updateUser.password,
    //             phone: phone,
    //             gender: toBoolean(gender),
    //             role: role ? role : updateUser.role,
    //             birthday: new Date(birthday)
    //         })
    //         await updateUser.save();
    //         return ResponseHandler.success(res, toUserResponseDTo(updateUser), 200);
    //     } else {
    //         return ResponseHandler.error(res, null, 404);
    //     }
    // } catch (error) {
    //     return ResponseHandler.error(res, error, 500);
    // }
};
exports.updateUserById = updateUserById;
const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await user_1.default.destroy({ where: { id } });
        if (deleteUser) {
            return handler_helper_1.ResponseHandler.success(res, deleteUser, 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, deleteUser, 400);
        }
    }
    catch (error) {
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.deleteUserById = deleteUserById;
const uploadAvatar = async (req, res) => {
    const { user } = req;
    const { file } = req;
    try {
        const urlImage = `${process.env.BASE_URL}/${file?.path}`;
        const uploadAvatarUser = await user_1.default.findOne({ where: { email: user.email } });
        if (uploadAvatarUser) {
            uploadAvatarUser.set({
                avatar: urlImage
            });
            await uploadAvatarUser.save();
            return handler_helper_1.ResponseHandler.success(res, (0, mapper_helper_1.toUserResponseDTo)(uploadAvatarUser), 200);
        }
        else {
            return handler_helper_1.ResponseHandler.error(res, null, 404);
        }
    }
    catch (error) {
        console.log("FF", error);
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.uploadAvatar = uploadAvatar;
