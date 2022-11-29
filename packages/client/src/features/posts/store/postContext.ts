import {createContext, Dispatch, SetStateAction} from "react";
import {Post} from "../models/postModels";

export interface PostContextModel {
  editMode: boolean,
  setIsEditMode: Dispatch<SetStateAction<boolean>>,
  post: Post | undefined
}

export const PostContext = createContext<PostContextModel>({} as PostContextModel)
