import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../Entity/user.entity";
import {Repository} from "typeorm";
import {UserInterface} from "../interfaces/user.interface";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User)
    private userRepository: Repository<User>){
    }

    createUser(user: UserInterface):void{
        this.userRepository.save(user).then(value => {
            console.log(value)
        });
    }

    findOne(id:string): Promise<User[] | null>{
        return this.userRepository.findBy({id:+id});
    }

    findAll(): Promise<User[] | null> {
        return this.userRepository.find();
    }

    updateUser():void{

    }

    deleteUser(id:string):void{
        this.userRepository.delete({id:+id});
    }
}
