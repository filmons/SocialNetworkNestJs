import {
    HttpException,
    HttpStatus,
    Inject,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  
  import { Post } from '../entity/post.entity';
  import  PostRepository  from '../repository/post.repository';
  import { IPostReposetery, IPostService } from '../interfaces/post.interface';
  
  @Injectable()
  export class PostService implements IPostService {
      constructor(
          @Inject(PostRepository)
          private postRepository: IPostReposetery,
      ) {}
      async getAllPost(): Promise<Post[]> {
        const posts = await  this.postRepository.getAllPost();
        return  posts
      }
  
      async getOnePost(id: number): Promise<Post> {
        const onepost = await this.postRepository.getOnePost(id)
        if (!onepost) {
          throw new Error('onepost not found.');
        }
        return onepost
      }
  }  