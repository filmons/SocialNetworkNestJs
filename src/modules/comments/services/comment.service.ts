import { Inject, Injectable } from '@nestjs/common';
import { ICommentReposetery } from '../interfaces/comment.interface';
import { Comment } from '../Entity/comment.entity';
import CommentRepository from '../repository/comment.repository';
import { comment } from '../types/comment.types';
@Injectable()
export class CommentService {
    constructor(
        @Inject(CommentRepository)
        private commentRepository: ICommentReposetery,
        // @Inject(UserFollowersUserModule)
        // private userFollowersRepository: UserFollowers,
    ) { }

    async getAllComment(): Promise<Comment[]> {
        try {
            const comments = await this.commentRepository.getAllComment();
            return comments
        } catch (error) {
            console.log(error)
        }
    }

    async addComment(comment): Promise<Comment> {
        if (!comment.content) {
            throw new Error('comment not found.');
        } else {
          return this.commentRepository.addComment(comment);
        }
      }



}
