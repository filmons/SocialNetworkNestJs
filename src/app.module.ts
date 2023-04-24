import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/controllers/user.controller';
import { UserModule } from './user/module/user.module';
import { UserService } from './user/services/user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";
import {User} from "./Entity/user.entity";
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import DbConfig from './config/db.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
    CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
