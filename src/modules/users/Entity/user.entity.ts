import { from } from 'rxjs';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    ManyToOne,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
//   import { Practitioner } from '../practitioner/practitioner.entity';
// ipmort {Post} from '..'
import { Posts } from 'src/modules/posts/Entity/post.entity';

import { Comment } from 'src/modules/comments/Entity/comment.entity'; 
import { Like } from 'src/modules/likes/Entity/like.entity'; 
import { Follower } from 'src/modules/follower/Entity/follower.entity';
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    mail: string;
  
    @Column()
    passsword: string;
  
   
    @OneToMany(() => Posts, post => post.user)
    posts: Posts[];
  
    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[];
  
    @OneToMany(() => Like, like => like.user)
    likes: Like[];
  
    @OneToMany(() => Follower, follower => follower.following)
    followers: Follower[];
    
    @ManyToMany(() => Follower, follower => follower.following)
    following: Follower[];
  
  
  

  }
  