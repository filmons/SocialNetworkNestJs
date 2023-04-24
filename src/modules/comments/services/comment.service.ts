import {
    HttpException,
    HttpStatus,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { Comment } from '../entity/comment.entity';
import  CommentRepository  from '../repository/comment.repository';
import { ICommentReposetery, ICommentService } from '../interfaces/comment.interface';
  
@Injectable()
export class CommentService implements ICommentService {
    constructor(
        @Inject(CommentRepository)
      private commentRepository: ICommentReposetery,
    ) {}
    async getAllComment(): Promise<Comment[]> {
        const comments = await  this.commentRepository.getAllComment();
        return comments
    }

    async getOneComment(id: number): Promise<Comment> {
        const onecomment = await this.commentRepository.getOneComment(id)
        if (!onecomment) {
          throw new Error('onecomment not found.');
        }
        return onecomment
    }
  }  