
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,

} from '@nestjs/common';
import { Response } from 'express';
import { PostService } from '../services/post.service';
import { Posts } from '../Entity/post.entity';
import { Express } from 'express';
import { FileInterceptor, FilesInterceptor, } from '@nestjs/platform-express';
import { UserRequest } from 'src/modules/users/interfaces/user.interface';
import { UserService } from 'src/modules/users/services/user.service';
// import { MulterFile } from '@nestjs/platform-express';

@Controller('/post')
export class PostController {

  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) { }

  @Get()
  getAllPost(): Promise<Posts[]> {
    return this.postService.getAllPost();

  }

  @Get(':id')
  async getOnePost(@Res() response: Response,
    @Param('id') id: number): Promise<void> {
    console.log(id)
    try {
      const posts = await this.postService.getOnePost(id)
      response.status(HttpStatus.FOUND).send(posts);
    } catch (error) {
      console.log(error)
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Post('/add')
  async create(
    @Body() postData: Posts,
    // @UploadedFile() image: Express.Multer.File,
    @Req() request: UserRequest,
    @Res() response: Response,

  ): Promise<void> {

    const userId = postData.user.id;
    const user = await this.userService.getOneUser(userId); // Assuming you're using an authentication middleware to set the user object in the request
    if (!user.id) {
      response.status(HttpStatus.UNAUTHORIZED).json({ message: 'User not authorized' });
      return;
    }
    postData.user = user
    const newpost = await this.postService.addPost(postData);
    response.status(HttpStatus.CREATED).json(newpost);
  }

  @Delete('/delete/:id')
  async deletePost(@Param('id') id: number): Promise<void> {
    await this.postService.deletePost(id);
  }

  @Put('/update/:id')
  async updatePost(@Param('id') id: number, @Body() postData: Posts): Promise<Posts> {
    const updatedPost = await this.postService.updatePost(id, postData);
    return updatedPost;
  }
}
