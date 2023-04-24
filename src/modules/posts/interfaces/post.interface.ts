import { Posts } from "../Entity/post.entity";
import { post } from "../types/post.types";

export interface IPostReposetery {
    getAllPost(): Promise<Posts[]>;
    getOnePost(id): Promise<Posts>;
    addPost(postData: post): Promise<Posts>;
    deletePost(id): Promise<void>;
    updatePost(id, post: Posts): Promise<Posts>;
}

export interface IPostService {
    getAllPost(): Promise<Posts[]>;
    getOnePost(id): Promise<Posts>;
    addPost(postData: post): Promise<Posts>;
    deletePost(id): Promise<void>;
    updatePost(id, post: Posts): Promise<Posts>;
}
