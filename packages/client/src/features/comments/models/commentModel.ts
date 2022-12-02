import {User} from "../../../common/models/userModels";

export interface CommentModel {
  text: string,
  author: User,
  userId: number,
  postId: number,
  createdAt: string,
  id: number
}

export interface CreateCommentData {
  text: string,
  userId: number,
  postId: number,
}
