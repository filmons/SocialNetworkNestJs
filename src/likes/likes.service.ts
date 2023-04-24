import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Repository} from "typeorm";
import {Like} from "./entities/like.entity";

@Injectable()
export class LikesService {

  constructor(@InjectRepository(Like)
              private likeRepository: Repository<Like>) {
  }

  create(createLikeDto: CreateLikeDto) {
    return this.likeRepository.create(createLikeDto);
  }

  findAll() {
    return this.likeRepository.find();
  }

  findOne(id: number) {
    return this.likeRepository.findOneBy({id});
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return this.likeRepository.update(id,updateLikeDto);
  }

  remove(id: number) {
    return this.likeRepository.delete(id);
  }
}
