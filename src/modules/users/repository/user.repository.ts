import { EntityRepository, EntityManager, Any } from 'typeorm';
import { User } from '../Entity/user.entity'
import { Posts } from 'src/modules/posts/Entity/post.entity';
import { Like, Repository } from 'typeorm';
@EntityRepository()
export class UserRepository {
    constructor(private manager: EntityManager) {}
    async getAllUser() {
        return  this.manager.find(User);
      }

      async getOneUser(id: number) {
        const u = await this.manager.findOne(User,{ where: { id }, relations: ['posts', 'posts.comments', 'posts.likes', 'followers', 'likes', ], });
        return u
      }


      async searchUsers(query: string): Promise<User[]> {
        // let keywords = query;
        // console.log(keywords)
        // if (typeof keywords === 'string') keywords = [keywords];
        const users = await this.manager.find(User, {
          where: [
            { name: Like(`%${query}%`) },
          ],
        });
        console.log(query, 'this sis the query')
        console.log(users, 'users')
        return users;
      }

   
   
     

}

