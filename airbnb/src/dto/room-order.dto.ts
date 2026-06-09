interface RoomOrderDTO {
    id: number,
    maPhong: number,
    ngayDen: Date,
    ngayDi: Date,
    soLuongKhach: number,
    maNguoiDung: number,
}

type CreateRoomOrderReq = Omit<RoomOrderRes, "id">;
type UpdateRoomOrderReq = Partial<CreateRoomOrderReq>

type RoomOrderIdQueryReq = {
    MaNguoiDung: number
}
type RoomOrderRes = RoomOrderDTO;


export { CreateRoomOrderReq, UpdateRoomOrderReq, RoomOrderIdQueryReq, RoomOrderRes, }