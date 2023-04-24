import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/Entity/user.entity'; 
import { Posts } from '../../posts/Entity/post.entity'; 

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.likes)
  user: User;

  @ManyToOne(() => Posts, post => post.likes)
  post: Posts;
}