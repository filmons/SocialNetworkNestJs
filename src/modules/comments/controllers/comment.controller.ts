import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Res,
    UseGuards,
  } from "@nestjs/common";
  import { Response } from "express";
  import { Comment } from "../entity/comment.entity";
  import { CommentService } from "../services/comment.service";

  @Controller("/comment")
  export class CommentController {
    constructor(private readonly commentService: CommentService) {}
  
    //  @UseGuards(AuthGuard())
    @Get()
    getAllPost(): Promise<Comment[]> {
      return this.commentService.getAllComment();
    }

    //  @UseGuards(AuthGuard())
    @Get(":id")
    async getOneComment(
      @Res() response: Response,
      @Param("id") id: number
    ): Promise<void> {
      try {
        const comment = await this.commentService.getOneComment(id);
        response.status(HttpStatus.FOUND).send(comment);
      } catch (error) {
        console.log(error);
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
    }
  }