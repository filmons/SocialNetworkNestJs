import { Comment } from "../Entity/comment.entity"
import { comment } from "../types/comment.types"
export interface ICommentReposetery {
    getAllComment(): Promise<Comment[]>;
    addComment(commentData: comment): Promise<Comment>;
}

export interface ICommentService {
    getAllComment(): Promise<Comment[]>;
    addComment(commentData: comment): Promise<Comment>;
}
