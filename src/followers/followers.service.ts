import { Injectable } from '@nestjs/common';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Repository} from "typeorm";
import {Follower} from "./entities/follower.entity";

@Injectable()
export class FollowersService {
  constructor(@InjectRepository(Follower)
              private followerRepository: Repository<Follower>) {
  }

  create(createFollowerDto: CreateFollowerDto) {
    return this.followerRepository.create(createFollowerDto);
  }

  findAll() {
    return this.followerRepository.find();
  }

  findOne(id: number) {
    return this.followerRepository.findOneBy({id});
  }

  update(id: number, updateFollowerDto: UpdateFollowerDto) {
    return this.followerRepository.update(id,updateFollowerDto);
  }

  remove(id: number) {
    return this.followerRepository.delete(id);
  }
}
