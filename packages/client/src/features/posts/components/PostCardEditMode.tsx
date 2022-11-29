import React, {FC, useContext} from 'react';
import CreatePostForm, {EditPostConfig} from "./CreatePostForm";
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {Post} from "../models/postModels";
import {PostContext} from "../store/postContext";

const PostCardEditMode: FC = () => {
  const postCtx = useContext(PostContext)
  const config: EditPostConfig = {
    post: postCtx?.post as Post,
    isEditMode: postCtx?.editMode as boolean
  }

  return (
    <BlogSimpleCard>
      <CreatePostForm editPostConfig={config}/>
    </BlogSimpleCard>
  );
};

export default PostCardEditMode;
