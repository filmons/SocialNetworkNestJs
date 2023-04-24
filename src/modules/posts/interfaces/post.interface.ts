import { Post } from "../Entity/post.entity";
export interface IPostReposetery {
    getAllPost(): Promise<Post[]>;
    getOnePost(id): Promise<Post>;
}

export interface IPostService {
    getAllPost(): Promise<Post[]>;
    getOnePost(id): Promise<Post>;
}