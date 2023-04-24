import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { ICommentService } from '../interfaces/comment.interface';
import { Posts } from 'src/modules/posts/Entity/post.entity';
import { Comment } from '../Entity/comment.entity';
import { Response } from 'express';
import { CommentService } from '../services/comment.service';
import { PostService } from 'src/modules/posts/services/post.service';
import { UserService } from 'src/modules/users/services/user.service';
import { User } from 'src/modules/users/Entity/user.entity';
import { UserRequest } from 'src/modules/users/interfaces/user.interface';

@Controller('/comment')
export class CommentController {

    constructor(
        private readonly commentService: CommentService,
        private readonly userService: UserService,
        private readonly postService: PostService,
    ) { }
    @Get()
    getAllComment(): Promise<Comment[]> {
        return this.commentService.getAllComment();

    }
  

    @Post(':postId/comment')
    async addComment(
      @Param('id') postId: number,
      @Body() commentData: Comment,
      @Req() request: UserRequest,
      @Res() response: Response,
    ) {

      const userId = commentData.user.id;
      // console.log(commentData, "loll")
      // commentData.user = userId
      const user =  await this.userService.getOneUser(userId); // Assuming you're using an authentication middleware to set the user object in the request
      console.log(user.id)
        if (!user) {
          response.status(HttpStatus.UNAUTHORIZED).json({ message: 'User not authorized' });
          return;
        }
      const post = await this.postService.getOnePost(postId);
      console.log(post.id)
      if (!post) {
        response.status(HttpStatus.NOT_FOUND).json({ message: 'Post not found' });
        return;
      }
      // console.log(request.user, "idhdhdd")
      commentData.post = post;
      commentData.user = user

      const comment = await this.commentService.addComment(commentData);
      // console.log(comment, 'commentData');
      response.status(HttpStatus.CREATED).json(comment);
    }
}
