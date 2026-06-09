import { CommentRes } from "../dto/comment.dto";
import { LocationRes } from "../dto/location.dto";
import { UserRes } from "../dto/user.dto";

export const toLocationResponseDTo = (location: any): LocationRes => {
    return {
        id: location?.id,
        tenViTri: location?.name,
        tinhThanh: location?.province,
        quocGia: location?.country,
        hinhAnh: location?.photo ?? ""
    };
}
export const toUserResponseDTo = (user: any): UserRes => {
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

export const toCommentResponseDTo = (comment: any): CommentRes => {
    return {
        id: comment?.id,
        maPhong: comment?.roomId,
        maNguoiBinhLuan: comment?.userId,
        ngayBinhLuan: comment?.date,
        noiDung: comment?.content,
        saoBinhLuan: comment?.star,
    };
}