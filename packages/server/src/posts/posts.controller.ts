import {Body, Controller, Delete, Get, Post, Query, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {JwtAuthGuards} from "../auth/jwt-auth.guards";

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPost(
    @Body() dto: CreatePostDto,
    @UploadedFile() image
    ) {
    return this.postService.create(dto, image)
  }

  @Delete()
  deletePost(@Query() query: { id: number }) {
    return this.postService.delete(query.id)
  }

  @Get('/all')
  @UseGuards(JwtAuthGuards)
  getAllPosts() {
    return this.postService.getAllPosts()
  }

  @Get()
  getSingePosts(@Query() query: { id: number }) {
    return this.postService.getSinglePosts(query.id)
  }
}
