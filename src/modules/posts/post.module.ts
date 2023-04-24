import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import  PostRepository  from './repository/post.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostSchema } from './schemas/post.schemas';

@Module({
  imports: [TypeOrmModule.forFeature([PostSchema])],
  providers: [PostService, PostRepository],
  controllers: [PostController]
})
export class PostModule {}