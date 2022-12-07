import { Injectable } from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {FilesService} from "../files/files.service";
import {UpdatePostDto} from "./dto/update-post.dto";
import {UpdatePostRatingDto} from "./dto/update-post-rating.dto";

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

  async update(dto: UpdatePostDto, image: any) {
    try {
      const postId = dto.postId
      const existingPost = await this.postRepository.findOne({where: {id: postId}})
      existingPost.title = dto.title
      existingPost.summary = dto.summary
      existingPost.content = dto.content
      if(image) {
        const fileName = await this.filesService.createFile(image)
        existingPost.image = fileName
      }
      await existingPost.save()
      return existingPost
    } catch {
      throw new Error('Error while updating post')
    }
  }

  async updatePostRating(dto: UpdatePostRatingDto) {
    try {
      const post = await this.getSinglePosts(dto.postId)
      post.rating += dto.delta
      await post.save()
      return post
    } catch {
      throw new Error('Error while updating post rating')
    }

  }

  async delete(id: number) {
    const post = await this.postRepository.findOne({where: {id}})
    if(!post) {
      throw new Error('post does not exist')
    }
    await this.postRepository.destroy({where: {id}})
    return {message: `Post ${post.id} deleted successfully`}
  }

  async getAllPosts() {
    const post = await this.postRepository.findAll({include: {all: true}})
    return post
  }

  async getPagePosts(config: {offset: string, limit: string}) {
    const allPosts = await this.postRepository.findAll({include: {all: true}})
    const offset = Number(config.offset)
    const postsPerPage = Number(config.limit)

    const from = offset * postsPerPage;
    const to  = offset * postsPerPage + postsPerPage
    return {
      posts: allPosts.slice(from, to),
      totalAmount: allPosts.length
    }
  }

  async getSinglePosts(id: number) {
    const post = await this.postRepository.findOne({where: {id}, include: {all: true}})
    return post
  }
}
