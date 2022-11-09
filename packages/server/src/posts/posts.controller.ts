import {Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";

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

  @Get('/all')
  getAllPosts() {
    return this.postService.getAllPosts()
  }

  @Get()
  getSingePosts(@Query() query: { id: number }) {
    return this.postService.getSinglePosts(query.id)
  }
}
