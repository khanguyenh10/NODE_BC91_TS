interface CommentDTO {
    id: number,
    maPhong: number,
    maNguoiBinhLuan: number,
    ngayBinhLuan: string,
    noiDung: string,
    saoBinhLuan: number,
}

type CreateCommentReq = Omit<CommentRes, "id">;
type UpdateCommentReq = Partial<CreateCommentReq>


type CommentRes = CommentDTO;


export { CreateCommentReq, UpdateCommentReq, CommentRes, }