import React, {FC, useContext} from 'react';
import PostMetainfo from "./PostMetainfo";
import PostContent from "./PostContent";
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {PostContext} from "../store/postContext";

const PostCard: FC = () => {
  const postCtx = useContext(PostContext)

  if(!postCtx?.post) {
    return null
  }
  return (
    <BlogSimpleCard>
      <PostMetainfo post={postCtx?.post}/>
      <PostContent post={postCtx?.post}/>
    </BlogSimpleCard>
  );
};

export default PostCard;
