import { EntityRepository, EntityManager, Any } from 'typeorm';
import { Comment } from '../entity/comment.entity'
@EntityRepository()
class CommentRepository {
  constructor(private manager: EntityManager) {}
  async getAllComment() {
    return  this.manager.find(Comment);
  }
  async getOneComment(id: number) {
    return await this.manager.findOne(Comment,{ where: { id }});
  }
}
export default CommentRepository