interface LocationDTO {
    id: number,
    tenViTri: string,
    tinhThanh: string,
    quocGia: string,
    hinhAnh: string
}

type CreateLocationReq = Omit<LocationRes, "id">;
type UpdateLocationReq = Partial<CreateLocationReq>

type LocationIdQueryReq = {
    maViTri: number
}
type LocationRes = LocationDTO;


export { CreateLocationReq, UpdateLocationReq, LocationIdQueryReq, LocationRes, }