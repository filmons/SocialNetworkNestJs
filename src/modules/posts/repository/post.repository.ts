import { EntityRepository, EntityManager, Any } from 'typeorm';
import { Post } from '../entity/post.entity'
@EntityRepository()
class PostRepository {
  constructor(private manager: EntityManager) {}
  async getAllPost() {
    return  this.manager.find(Post);
  }
  async getOnePost(id: number) {
    return await this.manager.findOne(Post,{ where: { id }});
  }
}
export default PostRepository