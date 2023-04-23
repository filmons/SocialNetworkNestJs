import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {UserInterface} from "../interfaces/user.interface";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @Get()
    findAllUsers(): void {
       this.userService.findAll().then( (value) => {
           console.log(value)
       })
    }

    @Get('/:id')
    findOneUser(@Param('id') id): void {
        console.log(id);
       this.userService.findOne(id).then((value) => {
           console.log(value);
       });
    }

    @Post('/addUser')
    addUser(@Body() user: UserInterface): void {
        console.log(user);
        this.userService.createUser(user);
    }


    @Delete('/:id')
    deleteUser(@Param('id') id): void {
        this.userService.deleteUser(id);
    }

}
