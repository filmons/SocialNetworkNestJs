import { EntitySchema } from 'typeorm';
import { Comment } from '../Entity/comment.entity';

export const CommentSchema = new EntitySchema<Comment>({
  name: 'Comment',
  target: Comment,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    content: {
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
