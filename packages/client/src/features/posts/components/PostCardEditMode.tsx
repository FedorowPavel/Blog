import React, {FC, useContext} from 'react';
import CreatePostForm, {EditPostConfig} from "./CreatePostForm";
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {PostContext} from "../store/postContext";
import {Post} from "../models/postModels";

const PostCardEditMode: FC = () => {
  const postCtx = useContext(PostContext)

  const config: EditPostConfig = {
    post: postCtx.post as Post,
    isEditMode: postCtx.editMode,
    setIsEditMode: postCtx?.setIsEditMode
  }

  return (
    <BlogSimpleCard>
      <CreatePostForm editPostConfig={config}/>
    </BlogSimpleCard>
  );
};

export default PostCardEditMode;
