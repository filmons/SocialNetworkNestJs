import { EntityRepository, EntityManager, Any } from 'typeorm';
import { Comment } from '../Entity/comment.entity';

@EntityRepository()
class CommentRepository {
  constructor(private manager: EntityManager) { }
  async getAllComment() {
    return this.manager.find(Comment);
  }

  // async getOnePost(id: number) {
  //   return await this.manager.findOne(Posts, { where: { id }, relations: ['comments', 'likes'], });
  //   // return await this.manager.findOne(User,{ where: { id },  relations: ['posts', 'posts.likes', 'posts.comments', 'followers', 'following', 'likes'], });

  // }
  async addComment(comment: Comment) {
    // console.log(comment)
    return await this.manager.save(Comment, comment);
    // console.log(Comment, 'jkk', comment)
  }

}
export default CommentRepository
