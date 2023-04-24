import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/Entity/user.entity'; 
import { Post } from '../../posts/Entity/post.entity'; 

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.likes)
  user: User;

  @ManyToOne(() => Post, post => post.likes)
  post: Post;
}