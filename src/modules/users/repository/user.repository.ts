import { EntityRepository, EntityManager, Any } from 'typeorm';
import { User } from '../Entity/user.entity'
@EntityRepository()
class UserRepository {
    constructor(private manager: EntityManager) {}
    async getAllUser() {
        return  this.manager.find(User);
      }
      async getOneUser(id: number) {
        return await this.manager.findOne(User,{ where: { id }, relations: ['posts', 'posts.comments', 'posts.likes', 'followers', 'likes', ], });
        // return await this.manager.findOne(User,{ where: { id },  relations: ['posts', 'posts.likes', 'posts.comments', 'followers', 'following', 'likes'], });

      }
   
}
export default UserRepository
