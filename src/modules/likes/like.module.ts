import { Module } from '@nestjs/common';
import { LikeService } from './services/like.service';
import { LikeController } from './controllers/like.controller';

@Module({
  providers: [LikeService],
  controllers: [LikeController]
})
export class LikeModule {}
