import React from 'react';
import CreatePostForm from "./CreatePostForm";
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";

const PostCardEditMode = () => {
  return (
    <BlogSimpleCard>
      <CreatePostForm/>
    </BlogSimpleCard>
  );
};

export default PostCardEditMode;
