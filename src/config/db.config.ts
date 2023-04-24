import { ConfigModule } from '@nestjs/config';
import {Posts} from "../posts/entities/post.entity";
import {User} from "../user/entities/user.entity";
import {Follower} from "../followers/entities/follower.entity";
import {Comments} from "../comments/entities/comment.entity";
import {Like} from "../likes/entities/like.entity";

export default (): ConfigModule => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User,Posts,Follower,Comments, Like],
    synchronize: true,
});
