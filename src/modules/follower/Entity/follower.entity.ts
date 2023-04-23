import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/Entity/user.entity'; 

@Entity()
export class Follower {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.followers)
  follower: User;

  @ManyToOne(() => User, user => user.following)
  following: User;
}
