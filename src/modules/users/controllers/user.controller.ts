import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from "@nestjs/common";
import { Response } from "express";
import { User } from "../entity/user.entity";
import { UserService } from "../services/user.service";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  //  @UseGuards(AuthGuard())
  @Get()
  getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }

  //  @UseGuards(AuthGuard())
  @Get(":id")
  async getOneUser(
    @Res() response: Response,
    @Param("id") id: number
  ): Promise<void> {
    try {
      const user = await this.userService.getOneUser(id);
      response.status(HttpStatus.FOUND).send(user);
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
