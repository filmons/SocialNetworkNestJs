import { User } from "../Entity/user.entity";
export interface IUserReposetery {
    getAllUser(): Promise<User[]>;
    getOneUser(id): Promise<User>;
    // getOneUserBymail(User: user): Promise<User>;
}

export interface IUserService {
    getAllUser(): Promise<User[]>;
    getOneUser(id): Promise<User>;
    // getOneUserBymail(User: user): Promise<User>;
}