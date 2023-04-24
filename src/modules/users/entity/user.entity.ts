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

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_login' })
  user_login: string;

  @Column({ name: 'user_pwd' })
  user_pwd: string;

  @Column({ name: 'user_pseudo' })
  user_pseudo: string;

  @Column({ name: 'user_email' })
  user_email: string;

  @Column({ name: 'last_name' })
  last_name: string;

  @Column({ name: 'first_name' })
  first_name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'user_avatar' })
  user_avatar: string;

  @Column({ name: 'followers' })
  followers: string;

  @Column({ name: 'following' })
  following: string;

  @Column({ name: 'certified' })
  certified: number;
}  