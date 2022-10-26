import {User} from "../../auth/registration/store/authApi/types";

export interface Post {
  id: number,
  title: string,
  summary: string,
  content: string,
  image: string,
  author: User,
  comments: Comment[],
  rating: Rating
}

export interface Comment {
  id: number,
  content: string,
  rating: Rating,
  author: string,
}

export type Rating = 1 | 2 | 3 | 4 | 5
