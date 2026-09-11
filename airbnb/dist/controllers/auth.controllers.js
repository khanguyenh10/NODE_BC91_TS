"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const handler_helper_1 = require("../helper/handler-helper");
const avatar_helper_1 = require("../helper/avatar-helper");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const text_helper_1 = require("../helper/text-helper");
const mapper_helper_1 = require("../helper/mapper-helper");
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = async (req, res) => {
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
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // kiểm tra email có tồn tại ko
        const user = await user_1.default.findOne({ where: { email }, raw: true });
        console.log(user, email, password);
        if (user) {
            const isAuth = await bcryptjs_1.default.compare(password, user.password);
            if (isAuth) {
                const token = jsonwebtoken_1.default.sign({ email: user.email, type: user.role }, process.env.SECRET_KEY, { expiresIn: "1h" });
                const userResponse = {
                    user: { ...user },
                    token
                };
                return handler_helper_1.ResponseHandler.success(res, userResponse, 200);
            }
            else {
                handler_helper_1.ResponseHandler.error(res, 'Email and password doesnot match', 400);
            }
        }
        else {
            handler_helper_1.ResponseHandler.error(res, 'User hasnot registered', 400);
        }
    }
    catch (error) {
        console.log("error", error);
        return handler_helper_1.ResponseHandler.error(res, error, 500);
    }
};
exports.login = login;
