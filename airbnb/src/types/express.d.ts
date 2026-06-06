import { User } from "../models/User";

declare global {
    namespace Express {
        interface Request {
            file?: Multer.File;
            files?: Multer.File[];
            user?: User;
        }
    }
}

export { };