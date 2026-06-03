import { LocationResponseDTO } from "../dto/location.dto";

export const toLocationResponseDTo = (location: any): LocationResponseDTO => {
    return {
        id: location?.id,
        tenViTri: location?.name,
        tinhThanh: location?.province,
        quocGia: location?.country,
        hinhAnh: location?.photo ?? ""
    };
}