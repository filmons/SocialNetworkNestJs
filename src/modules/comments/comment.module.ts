import { Module } from '@nestjs/common';
import { CommentService } from './services/comment.service';
import { CommentController } from './controllers/comment.controller';
import  CommentRepository  from './repository/comment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentSchema } from './schemas/comment.schemas';

@Module({
  imports: [TypeOrmModule.forFeature([CommentSchema])],
  providers: [CommentService, CommentRepository],
  controllers: [CommentController]
})
export class CommentModule {}