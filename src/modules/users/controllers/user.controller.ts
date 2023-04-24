import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Query,
    Res,
    UseGuards,
    
  } from '@nestjs/common';
import { Response, query } from 'express';
import { User } from '../Entity/user.entity';
import { UserService } from '../services/user.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('/user')
export class UserController {
 constructor(private readonly userService: UserService) {}

//  @UseGuards(AuthGuard())
 @Get()
 getAllUser(): Promise<User[]> {
    return this.userService.getAllUser(); 

 }

 @Get('/search')
 getAllUsers(@Query('q') query: string): Promise<void> {
  console.log(query, "this is the query")
   return this.userService.searchUsers(query);
 
 }
 @Get('/:id')
 async getOneUser(@Res() response: Response,
 @Param('id') id: number): Promise<void>  {
  try {
    const user = await this.userService.getOneUser(id)
    console.log(user.id, "user in controler")
    console.log(id, "user in controler")
    response.status(HttpStatus.FOUND).send(user);
  } catch (error) {
    console.log(error)
    throw new HttpException(error.message, HttpStatus.NOT_FOUND);
  }
}



}

