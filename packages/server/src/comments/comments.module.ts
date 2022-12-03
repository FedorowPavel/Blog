import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Post} from "../posts/posts.model";
import {Coment} from "./comment.model";

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [
    SequelizeModule.forFeature([User, Post, Coment])
  ]
})
export class CommentsModule {}
