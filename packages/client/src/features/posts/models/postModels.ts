import {User} from "../../../common/models/userModels";

export interface Post {
  id: number,
  title: string,
  summary: string,
  content: string,
  image: string,
  author: User,
  comments: Comment[],
  rating: number,
  createdAt: string,
  updatedAt: string
}

export interface Comment {
  id: number,
  content: string,
  rating: number,
  author: string,
}

export interface CreatePostFormData {
  image: File,
  title: string,
  summary: string,
  content: string
}

export interface CreatePostData extends CreatePostFormData {
  userId: number
}
