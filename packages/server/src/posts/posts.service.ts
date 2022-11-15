import { Injectable } from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {FilesService} from "../files/files.service";

@Injectable()
export class PostsService {

  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private filesService: FilesService
  ) {
  }

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.filesService.createFile(image)
    const post = await this.postRepository.create({...dto, image: fileName})
    return post
  }

  async delete(id: number) {
    const post = await this.postRepository.findOne({where: {id}})
    if(!post) {
      throw new Error('post does not exist')
    }
    await this.postRepository.destroy({where: {id}})
  }

  async getAllPosts() {
    const post = await this.postRepository.findAll({include: {all: true}})
    return post
  }

  async getSinglePosts(id: number) {
    const post = await this.postRepository.findOne({where: {id}, include: {all: true}})
    return post
  }
}
