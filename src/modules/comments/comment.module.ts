import { Module } from '@nestjs/common';
import { CommentService } from './services/comment.service';
import { CommentController } from './controllers/comment.controller';
import CommentRepository from './repository/comment.repository';
import { CommentSchema } from './Schemas/comment.shema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from '../posts/services/post.service';
import { UserService } from '../users/services/user.service';
import {PostRepository} from '../posts/repository/post.repository';
import {UserRepository} from '../users/repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CommentSchema])],
  providers: [CommentService, CommentRepository,UserService,PostService, UserRepository,PostRepository],
  controllers: [CommentController]
})
export class CommentModule { }
