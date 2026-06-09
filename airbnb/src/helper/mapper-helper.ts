import { CommentRes } from "../dto/comment.dto";
import { LocationRes } from "../dto/location.dto";
import { RoomOrderRes } from "../dto/room-order.dto";
import { RoomRes } from "../dto/room.dto";
import { UserRes } from "../dto/user.dto";
import { Comment, Location, Room, RoomOrder, User } from "../models";

export const toLocationResponseDTo = (location: Location): LocationRes => {
    return {
        id: location?.id,
        tenViTri: location?.name,
        tinhThanh: location?.province,
        quocGia: location?.country,
        hinhAnh: location?.photo ?? ""
    };
}
export const toUserResponseDTo = (user: User): UserRes => {
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
}

export const toCommentResponseDTo = (comment: Comment): CommentRes => {
    return {
        id: comment?.id,
        maPhong: comment?.roomId,
        maNguoiBinhLuan: comment?.userId,
        ngayBinhLuan: comment?.date,
        noiDung: comment?.content,
        saoBinhLuan: comment?.star,
    };
}


export const toRoomResponseDTo = (room: Room | any): RoomRes => {
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
}

export const toRoomOrderResponseDTo = (room: RoomOrder): RoomOrderRes => {
    return {
        id: room?.id,
        maPhong: room?.roomId,
        ngayDen: room?.fromDate,
        ngayDi: room?.toDate,
        soLuongKhach: room?.guestCount,
        maNguoiDung: room?.userId,
    };
}


