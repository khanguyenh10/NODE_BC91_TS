"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRoomOrderResponseDTo = exports.toRoomResponseDTo = exports.toCommentResponseDTo = exports.toUserResponseDTo = exports.toLocationResponseDTo = void 0;
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
        // password: user?.password,
        phone: user?.phone,
        birthday: user?.birthday,
        gender: user?.gender,
        avatar: user?.avatar,
        role: user?.role
    };
};
exports.toUserResponseDTo = toUserResponseDTo;
const toCommentResponseDTo = (comment) => {
    return {
        id: comment?.id,
        maPhong: comment?.roomId,
        maNguoiBinhLuan: comment?.userId,
        ngayBinhLuan: comment?.date,
        noiDung: comment?.content,
        saoBinhLuan: comment?.star,
    };
};
exports.toCommentResponseDTo = toCommentResponseDTo;
const toRoomResponseDTo = (room) => {
    return {
        id: room?.id,
        tenPhong: room?.name,
        khach: room?.guestCount,
        phongNgu: room?.bedRoomCount,
        giuong: room?.bedCount,
        phongTam: room?.bathRoomCount,
        moTa: room?.description,
        giaTien: room?.price,
        mayGiat: room?.hasWashingMachine,
        banLa: room?.hasIron,
        tivi: room?.hasTV,
        dieuHoa: room?.hasAirConditioner,
        wifi: room?.hasWifi,
        bep: room?.hasKitchen,
        doXe: room?.hasParking,
        hoBoi: room?.hasSwimmingPool,
        banUi: room?.hasIronBoard,
        hinhAnh: room?.photo,
        maViTri: room?.locationId,
    };
};
exports.toRoomResponseDTo = toRoomResponseDTo;
const toRoomOrderResponseDTo = (room) => {
    return {
        id: room?.id,
        maPhong: room?.roomId,
        ngayDen: room?.fromDate,
        ngayDi: room?.toDate,
        soLuongKhach: room?.guestCount,
        maNguoiDung: room?.userId,
    };
};
exports.toRoomOrderResponseDTo = toRoomOrderResponseDTo;
