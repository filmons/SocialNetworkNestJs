import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormConfig';
import { UserModule, PostModule, CommentModule } from './modules';
import { LikeModule } from './modules/likes/like.module';
import { FollowerModule } from './modules/follower/follower.module';
import { PassportModule } from '@nestjs/passport';

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
    PostModule
    // UserFollowersUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
