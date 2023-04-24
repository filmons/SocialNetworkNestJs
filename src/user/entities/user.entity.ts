import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    description: string;

    @Column()
    followers: string;

    @Column()
    following: string;

    @Column()
    certified: string;

    @Column()
    user_avatar: string;

    @Column()
    user_email: string;

    @Column()
    user_login: string;

    @Column()
    user_pseudo: string;

    @Column()
    user_pwd: string;

}