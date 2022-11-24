import React, {FC} from 'react';
import PostMetainfo from "./PostMetainfo";
import PostContent from "./PostContent";
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {Post} from "../models/postModels";

const PostCard: FC<{post: Post | undefined}> = ({post}) => {
  if(!post) {
    return null
  }
  return (
    <BlogSimpleCard>
      <PostMetainfo post={post}/>
      <PostContent post={post}/>
    </BlogSimpleCard>
  );
};

export default PostCard;
