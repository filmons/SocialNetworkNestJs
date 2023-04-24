import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
//   import { Practitioner } from '../practitioner/practitioner.entity';
import { User } from 'src/modules/users/Entity/user.entity';
import { Like } from 'src/modules/likes/Entity/like.entity'; 
import { Comment } from 'src/modules/comments/Entity/comment.entity';
  @Entity()
  export class Posts  extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    image: string;
  
    @Column()
    vido: string;

    @Column({ default: 0 })
    number_likes: number;
  
    @Column({ default: 0 })
    number_dislikes: number;
    
    @ManyToOne(() => User, user => user.posts)
    user: User;
    @OneToMany(() => Like, like => like.post)
    likes: Like[];
    @OneToMany(() => Comment, comment => comment.post, { cascade: true } )
    comments: Comment[];
  }
  