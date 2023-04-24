import {Column, PrimaryGeneratedColumn} from "typeorm";

export class CreateFollowerDto {
    id: number;
    followerId: number;
    followingId: number;
}
