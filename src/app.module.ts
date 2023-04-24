import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormConfig';
import { UserModule } from './modules';
import { PostModule } from './modules/posts/post.module';
import { CommentModule } from './modules/comments/comment.module';

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
    PostModule,
    CommentModule,
    // UserFollowersUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}