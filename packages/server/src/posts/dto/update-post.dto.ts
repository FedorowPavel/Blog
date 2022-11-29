import {CreatePostDto} from "./create-post.dto";

export class UpdatePostDto extends CreatePostDto {
  readonly postId: number;
}
