import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Follower} from "../followers/entities/follower.entity";
import {Repository} from "typeorm";
import {Comments} from "./entities/comment.entity";

@Injectable()
export class CommentsService {

  constructor(@InjectRepository(Comments)
              private commentsRepository: Repository<Comments>) {
  }

  create(createCommentDto: CreateCommentDto) {
    return this.commentsRepository.create(createCommentDto);
  }

  findAll() {
    return this.commentsRepository.find();
  }

  findOne(id: number) {
    return this.commentsRepository.findOneBy({id});
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentsRepository.update(id,updateCommentDto)
  }

  remove(id: number) {
    return this.commentsRepository.delete(id);
  }
}
