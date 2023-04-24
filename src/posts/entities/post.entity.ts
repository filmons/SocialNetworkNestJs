import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    image: string;

    @Column()
    video: string;

    @Column()
    number_likes: number;

    @Column()
    number_dislikes: number;

    @Column()
    userId:number;
}
