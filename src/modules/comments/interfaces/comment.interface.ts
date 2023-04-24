import { Comment } from "../Entity/comment.entity";
export interface ICommentReposetery {
    getAllComment(): Promise<Comment[]>;
    getOneComment(id): Promise<Comment>;
}

export interface ICommentService {
    getAllComment(): Promise<Comment[]>;
    getOneComment(id): Promise<Comment>;
}