import { EntitySchema } from 'typeorm';
import { User } from '../entity/user.entity';
export const UserSchema = new EntitySchema<User>({
  name: 'users',

  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    user_login: {
      type: String,
    },
    user_pwd: {
      type: String,
    },
    user_pseudo: {
      type: String,
    },
    user_email: {
      type: String,
    },
    last_name: {
      type: String,
    },
    first_name: {
      type: String,
    },
    description: {
      type: String,
    },
    user_avatar: {
      type: String,
    },
    followers: {
      type: String,
    },
    following: {
      type: String,
    },
    certified: {
      type: String,
    }
  }
});