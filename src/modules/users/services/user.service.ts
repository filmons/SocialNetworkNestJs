import {
    HttpException,
    HttpStatus,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { User } from '../Entity/user.entity';
import  {UserRepository}  from '../repository/user.repository';
import { IUserReposetery, IUserService } from '../interfaces/user.interface';
// import { UserFollowers } from 'src/modules/user_followers_users/Entity/user_followers_user.entity';
import { Follower } from 'src/modules/follower/Entity/follower.entity'; 
// import { UserFollowersUserModule } from 'src/modules/user_followers_users/user_followers_user.module';
// import { UserSchema } from '../Schemas/user.shema';
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';


@Injectable()
export class UserService implements IUserService {
    constructor(
        @Inject(UserRepository)
        private userRepository: IUserReposetery,
        
        // @Inject(UserFollowersUserModule)
        // private userFollowersRepository: UserFollowers,
    ) {}
    async getAllUser(): Promise<User[]> {
      const users = await  this.userRepository.getAllUser();
        return  users
    }

    async getOneUser(id: number): Promise<User> {
        const oneuser = await this.userRepository.getOneUser(id)
        if (!oneuser) {
            throw new Error('user not found.');
          }
        return oneuser
      }

      async searchUsers(query: string): Promise<User> {
        console.log(query, "oneuser")
        return await this.userRepository.searchUsers(query);
      }
    
    
}
