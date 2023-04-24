import { user } from "../types/user.types";
import { User } from "../Entity/user.entity";
export interface IUserReposetery {
    getAllUser(): Promise<User[]>;
    getOneUser(id): Promise<User>;
    searchUsers(query): Promise<User>;

}

export interface IUserService {
    getAllUser(): Promise<User[]>;
    getOneUser(id): Promise<User>;
    searchUsers(query): Promise<User>;
}
export interface UserRequest extends Request {
    user: User;
  }

