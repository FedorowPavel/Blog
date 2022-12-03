import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {CommentsService} from "./comments.service";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  createPost(@Body() dto: CreateCommentDto) {
    return this.commentsService.addComment(dto)
  }

  @Get()
  getPostComments(@Query() query: { postId: number }) {
    return this.commentsService.getPostCommentsById(query.postId)
  }
}
