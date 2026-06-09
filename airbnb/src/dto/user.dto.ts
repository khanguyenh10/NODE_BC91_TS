import { Request } from "express"
interface UserDTO {
    id: number,
    name: string,
    email: string,
    password?: string,
    phone: string,
    birthday: Date,
    gender: boolean,
    avatar: string,
    role?: string
}
type UserRes = UserDTO;
type RegisterReq = UserDTO;
type UpdateUserReq = Partial<UserDTO>;
type LoginReq = {
    email: string,
    password: string
}

// Define an extended interface locally
interface AuthenticatedReq extends Request {
    user?: any;
}

export { UserDTO, UserRes, RegisterReq, LoginReq, AuthenticatedReq, UpdateUserReq }