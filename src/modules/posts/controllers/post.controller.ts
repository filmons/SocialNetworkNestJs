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
  import { Post } from "../entity/post.entity";
  import { PostService } from "../services/post.service";

  @Controller("/post")
  export class PostController {
    constructor(private readonly postService: PostService) {}
  
    //  @UseGuards(AuthGuard())
    @Get()
    getAllPost(): Promise<Post[]> {
      return this.postService.getAllPost();
    }

    //  @UseGuards(AuthGuard())
    @Get(":id")
    async getOnePost(
      @Res() response: Response,
      @Param("id") id: number
    ): Promise<void> {
      try {
        const post = await this.postService.getOnePost(id);
        response.status(HttpStatus.FOUND).send(post);
      } catch (error) {
        console.log(error);
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
    }
  }