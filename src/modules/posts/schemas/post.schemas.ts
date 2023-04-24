import { EntitySchema } from 'typeorm';
import { Post } from '../entity/post.entity';

export const PostSchema = new EntitySchema<Post>({
  name: 'posts',

  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    post_date: {
      type: Date,
    },
    post_author: {
      type: Number,
    },
    post_title: {
      type: String,
    },
    post_content: {
      type: String,
    },
    post_status: {
      type: String,
    },
    comments: {
      type: String,
    },
    likedBy: {
      type: String,
    },
    mediaSrc: {
      type: String,
    },
    post_modified: {
      type: Date,
    },
    post_type: {
      type: String,
    }
  }
});