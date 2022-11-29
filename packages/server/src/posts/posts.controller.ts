import {Body, Controller, Delete, Get, Post, Put, Query, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {JwtAuthGuards} from "../auth/jwt-auth.guards";
import {DeletePostDto} from "./dto/delete-post.dto";
import {UpdatePostDto} from "./dto/update-post.dto";

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

  @Put()
  @UseInterceptors(FileInterceptor('image'))
  updatePost(
    @Body() dto: UpdatePostDto,
    @UploadedFile() image
  ) {
    return this.postService.update(dto, image)
  }

  @Delete()
  deletePost(@Body() dto: DeletePostDto) {
    return this.postService.delete(dto.postId)
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
