import { EntityRepository, EntityManager, Any } from 'typeorm';
import { User } from '../entity/user.entity'
@EntityRepository()
class UserRepository {
  constructor(private manager: EntityManager) {}
  async getAllUser() {
    return  this.manager.find(User);
  }
  async getOneUser(id: number) {
    return await this.manager.findOne(User,{ where: { id }});
  }
}
export default UserRepository