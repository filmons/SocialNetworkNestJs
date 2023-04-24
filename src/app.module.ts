import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";

import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { UserModule} from "./user/user.module";
import {ConfigModule,ConfigService} from "@nestjs/config";
import { FollowersModule } from './followers/followers.module';
import { LikesModule } from './likes/likes.module';
import DbConfig from "./config/db.config";

@Module({
  imports: [UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DbConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: DbConfig,
    }),
      PostsModule,
    CommentsModule,
    FollowersModule,
    LikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
