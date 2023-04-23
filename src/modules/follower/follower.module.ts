import { Module } from '@nestjs/common';
import { FollowerService } from './services/follower.service';
import { FollowerController } from './controllers/follower.controller';

@Module({
  providers: [FollowerService],
  controllers: [FollowerController]
})
export class FollowerModule {}
