import { LocationRes } from "../dto/location.dto";

export const toLocationResponseDTo = (location: any): LocationRes => {
    return {
        id: location?.id,
        tenViTri: location?.name,
        tinhThanh: location?.province,
        quocGia: location?.country,
        hinhAnh: location?.photo ?? ""
    };
}