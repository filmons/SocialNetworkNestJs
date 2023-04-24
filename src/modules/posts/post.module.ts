import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostSchema } from './Schemas/post.shema';
import {PostRepository} from './repository/post.repository';
import { UserService } from '../users/services/user.service';
import { UserRepository } from '../users/repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostSchema])],
  providers: [PostService, PostRepository,  UserService,UserRepository],
  controllers: [PostController]
})
export class PostModule {}
