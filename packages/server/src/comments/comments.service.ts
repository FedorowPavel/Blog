import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Coment} from "./comment.model";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Coment) private comentRepository: typeof Coment,
  ) {
  }


  async addComment(dto: CreateCommentDto) {
    const comment = await this.comentRepository.create({...dto})
    return comment
  }

  async getPostCommentsById(id: number) {
    const comments = await this.comentRepository.findAll({where: {postId: id}, include: {all: true}})
    return comments
  }
}
