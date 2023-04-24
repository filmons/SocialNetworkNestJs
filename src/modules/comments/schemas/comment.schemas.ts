import { EntitySchema } from 'typeorm';
import { Comment } from '../entity/comment.entity';

export const CommentSchema = new EntitySchema<Comment>({
  name: 'comment',

  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    authorID: {
      type: Number,
    },
    content: {
      type: String,
    },
    date: {
      type: Date,
    }
  }
});