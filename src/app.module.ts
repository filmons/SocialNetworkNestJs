import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormConfig';
import { UserModule } from './modules';
import { CommentModule } from './modules/comments/comment.module';
import { LikeModule } from './modules/likes/like.module';
import { FollowerModule } from './modules/follower/follower.module';
import { PassportModule } from '@nestjs/passport';
// import { UserFollowersUserModule } from './modules/user_followers_users/user_followers_user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: ormConfig,
    }),
  
    UserModule,
    CommentModule,
    LikeModule,
    FollowerModule,
    // UserFollowersUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}