import {User} from "../../../common/models/userModels";
import {Post} from "../../posts/models/postModels";

export interface CommentModel {
  id: number
  text: string,
  author: User,
  post: Post,
  userId: number,
  postId: number,
  createdAt: string,
}

export interface CreateCommentData {
  text: string,
  userId: number,
  postId: number,
}
