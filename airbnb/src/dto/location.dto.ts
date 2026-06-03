interface LocationResponseDTO {
    id: number,
    tenViTri: string,
    tinhThanh: string,
    quocGia: string,
    hinhAnh: string
}
type CreateLocationDTO = Omit<LocationResponseDTO, "id">;
type UpdateLocationDTO = Partial<CreateLocationDTO>
export { CreateLocationDTO, UpdateLocationDTO, LocationResponseDTO }