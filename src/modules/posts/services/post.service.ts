import { Inject, Injectable } from '@nestjs/common';
import { IPostService , IPostReposetery} from '../interfaces/post.interface';
import { Posts } from '../Entity/post.entity';
import {PostRepository} from '../repository/post.repository';
import { post } from '../types/post.types';
@Injectable()
export class PostService implements IPostService {
    constructor(
        @Inject(PostRepository)
        private postRepository: IPostReposetery,
        // @Inject(UserFollowersUserModule)
        // private userFollowersRepository: UserFollowers,
    ) {}
    async getAllPost(): Promise<Posts[]> {
        const posts = await  this.postRepository.getAllPost();
        console.log(posts, "loll")
          return  posts
      }

      async getOnePost(id: number): Promise<Posts> {
        const deteilPost = await this.postRepository.getOnePost(id)
        if (!deteilPost) {
            throw new Error('deteilPost not found.');
          }
        return deteilPost
      }

      async addPost(postData :post): Promise<Posts> {
        // // console.log(post.user, "poste servise")
        // if (!post.title || !post.content || !post.image || !post.vido ||!post.number_likes || !post.number_dislikes) {
        // // throw new Error('deteilPost not found.');
        // } 
        const post = new Posts();
        post.title = postData.title;
        post.content = postData.content;
        post.image = postData.image;
        post.vido = postData.vido;
       
          return this.postRepository.addPost(postData);
        // return this.postRepository.addPost(post);
      
     
      }

      async deletePost(id: number): Promise<void> {
        console.log(id)
        await this.postRepository.deletePost(id);
      }
      async updatePost(id: number, post: Posts): Promise<Posts> {
        const postToUpdate = await this.postRepository.getOnePost(id);
        postToUpdate.title = post.title;
        postToUpdate.content = post.content;
        postToUpdate.image = post.image;
        postToUpdate.vido = post.vido;
        return this.postRepository.addPost(postToUpdate);
      }
}
