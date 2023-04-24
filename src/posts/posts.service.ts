import {Inject, Injectable} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {Posts} from "./entities/post.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PostsService {

  constructor(@InjectRepository(Posts)
              private postRepository:Repository<Posts>) {
  }
  create(createPostDto: CreatePostDto) {
    return this.postRepository.create(createPostDto);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({id});
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id,updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.delete({id});
  }
}
