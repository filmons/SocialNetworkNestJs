import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { User } from '../entity/user.entity';
import  UserRepository  from '../repository/user.repository';
import { IUserReposetery, IUserService } from '../interfaces/user.interface';

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
        throw new Error('oneuser not found.');
      }
      return oneuser
    }

      // async signIn(mail: string, passs: string): Promise<any> {
      //   const user = await this.userRepository.getOneUserBymail(mail);
      //   if (user?.passsword !== passs) {
      //     // throw new UnauthorizedException();
      //   }
      //   const { passsword, ...result } = user;
      //   // TODO: Generate a JWT and return it here
      //   // instead of the user object
      //   return result;
      // }
}