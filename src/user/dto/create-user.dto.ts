import {Column, PrimaryGeneratedColumn} from "typeorm";

export class CreateUserDto {
    id: number;
    first_name: string;
    last_name: string;
    description: string;
    followers: string;
    following: string;
    certified: string;
    user_avatar: string;
    user_email: string;
    user_login: string;
    user_pseudo: string;
    user_pwd: string;
}
