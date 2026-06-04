interface UserDTO {
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    gender: boolean,
    avatar: string,
    role?: string
}
type UserRes = UserDTO;
type RegisterReq = UserDTO;
type LoginReq = Partial<UserDTO>;

export { UserDTO, UserRes, RegisterReq, LoginReq }