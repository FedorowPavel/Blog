import {createContext, Dispatch, SetStateAction} from "react";
import {Post} from "../models/postModels";

export const PostContext = createContext<{
  editMode: boolean,
  setIsEditMode: Dispatch<SetStateAction<boolean>>,
  post: Post | undefined
} | undefined>(undefined)
