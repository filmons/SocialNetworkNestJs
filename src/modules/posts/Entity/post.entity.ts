import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity({ name: 'posts' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post_date: Date;

  @Column()
  post_author: number;

  @Column()
  post_title: string;

  @Column()
  post_content: string;

  @Column()
  post_status: string;

  @Column({ nullable: true })
  comments: string;

  @Column({ nullable: true })
  likedBy: string;

  @Column({ nullable: true })
  mediaSrc: string;

  @Column({ nullable: true })
  post_modified: Date;

  @Column()
  post_type: string;
}