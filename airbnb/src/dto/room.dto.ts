interface RoomDTO {
    id: number,
    tenPhong: string,
    khach: number,
    phongNgu: number,
    giuong: number,
    phongTam: number,
    moTa: string,
    giaTien: number,
    mayGiat: boolean,
    banLa: boolean,
    tivi: boolean,
    dieuHoa: boolean,
    wifi: boolean,
    bep: boolean,
    doXe: boolean,
    hoBoi: boolean,
    banUi: boolean,
    maViTri: number,
    hinhAnh: string
}

type CreateRoomReq = Omit<RoomRes, "id">;
type UpdateRoomReq = Partial<CreateRoomReq>

type RoomIdQueryReq = {
    maPhong: number
}
type RoomRes = RoomDTO;


export { CreateRoomReq, UpdateRoomReq, RoomIdQueryReq, RoomRes, }