import {Column} from "typeorm";

export class CreateCommentDto {
    id: number;
    authorId: number;
    content: string;
    date: string;
}
