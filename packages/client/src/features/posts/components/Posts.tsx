import React from 'react';
import {QueryFixedCacheKeysENUM} from "../../../common/constants/queryCacheKeys";
import {postsApi} from "../store/api";
import BlogFullCoveringSpinner from "../../../common/components/ui/BlogFullCoveringSpinner";
import PostCard from "./PostCard";
import {useToast} from "../../../common/hooks/useToast";
import CreatePostButton from "./CreatePostButton";

  const Posts = () => {
  const {data: posts, isLoading, error: getPostsError} = postsApi.useGetAllPostsQuery(null)
  const [, {isLoading: deleteIsLoading, error: deleteError, data: deleteResponseData}] = postsApi.useDeletePostMutation({
    fixedCacheKey: QueryFixedCacheKeysENUM.DELETE_POST,
  })
  useToast(getPostsError || deleteError, deleteResponseData)

  return (
    <>
      {
        posts
          ? posts.map(post => <PostCard post={post} key={post.id}/>)
          : <h1>No posts</h1>
      }
      <CreatePostButton/>

      <BlogFullCoveringSpinner isLoading={isLoading || deleteIsLoading}/>
    </>
  )
};

export default Posts;
