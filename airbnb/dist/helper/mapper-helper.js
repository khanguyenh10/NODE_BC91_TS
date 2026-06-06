"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserResponseDTo = exports.toLocationResponseDTo = void 0;
const toLocationResponseDTo = (location) => {
    return {
        id: location?.id,
        tenViTri: location?.name,
        tinhThanh: location?.province,
        quocGia: location?.country,
        hinhAnh: location?.photo ?? ""
    };
};
exports.toLocationResponseDTo = toLocationResponseDTo;
const toUserResponseDTo = (user) => {
    return {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        password: user?.password,
        phone: user?.phone,
        birthday: user?.birthday,
        gender: user?.gender,
        avatar: user?.avatar,
        role: user?.role
    };
};
exports.toUserResponseDTo = toUserResponseDTo;
