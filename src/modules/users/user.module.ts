import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import  UserRepository  from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './schemas/user.shema';

//import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [UserService, UserRepository],
  // exports: [UserService],
  controllers: [UserController]
})
export class UserModule {}