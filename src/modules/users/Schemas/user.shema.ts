import { EntitySchema } from 'typeorm';
import { User } from '../Entity/user.entity';
export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      name: {
        type: String,
      },
      mail: {
        type: String,
      },
      passsword: {
        type: String,
      },
    },
  });
  