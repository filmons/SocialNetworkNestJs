import {Column, PrimaryGeneratedColumn} from "typeorm";

export class CreatePostDto {
    id: number;
    title: string;
    content: string;
    image: string;
    video: string;
    number_likes: number;
    number_dislikes: number;
    userId:number;
}
