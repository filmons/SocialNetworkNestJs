import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    authorId: number;

    @Column()
    content: string;

    @Column()
    date: string;

}
