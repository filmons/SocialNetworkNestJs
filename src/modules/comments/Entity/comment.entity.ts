import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/Entity/user.entity'; 
import { Post } from '../../posts/Entity/post.entity'; 

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ default: 0 })
  number_likes: number;

  @Column({ default: 0 })
  number_dislikes: number;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Post, post => post.comments)
  post: Post;
}