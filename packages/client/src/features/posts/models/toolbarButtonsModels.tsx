import { To } from "react-router-dom";
import {Post} from "./postModels";

export interface EditButtonProps {
  isShown?: boolean,
}

export interface DeleteButtonProps {
  isShown?: boolean,
  post: Post | undefined,
  navigateTo?: To
}
