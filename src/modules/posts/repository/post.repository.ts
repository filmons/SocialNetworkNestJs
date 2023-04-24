import { EntityRepository, EntityManager, Any } from 'typeorm';
// import { User } from '../Entity/user.entity'
import { Posts } from '../Entity/post.entity';

@EntityRepository()
export class PostRepository {
  constructor(private manager: EntityManager) { }
  async getAllPost() {
    return this.manager.find(Posts);
  }

  async getOnePost(id: number) {
    return await this.manager.findOne(Posts,
      {
        where: { id },

        relations: ['comments', 'likes'],
      });
    // return await this.manager.findOne(User,{ where: { id },  relations: ['posts', 'posts.likes', 'posts.comments', 'followers', 'following', 'likes'], });

  }
  async addPost(post: Posts) {
    return await this.manager.save(Posts, post);
  }

  async deletePost(id: number): Promise<void> {
    console.log(id)
    await this.manager.delete(Posts, id);
  }

}

