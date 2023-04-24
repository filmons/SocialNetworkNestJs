import {Column} from "typeorm";

export class CreateLikeDto {
    id: number;
    userId: number;
    postId: number;
}
