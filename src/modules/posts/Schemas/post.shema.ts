import { EntitySchema } from 'typeorm';
import { Posts } from '../Entity/post.entity';

export const PostSchema = new EntitySchema<Posts>({
    name: 'Posts',
    target: Posts,
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      title: {
        type: String,
      },
      image: {
        type: String,
      },
      vido: {
        type: String,
      },
      number_likes: {
        type: Number,
      },
      number_dislikes: {
        type: Number,
      },
    },
  });
 