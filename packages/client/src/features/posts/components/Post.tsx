import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {postsApi} from "../store/api";
import BlogFullCoveringSpinner from "../../../common/components/ui/BlogFullCoveringSpinner";
import GoBackButton from "../../../common/components/ui/GoBackButton";
import PostCard from "./PostCard";
import PostCardEditMode from './PostCardEditMode';
import PostToolbar from "./PostToolbar";

const Post = () => {
  const {id} = useParams<{id: string}>();
  const {data: post, isLoading} = postsApi.useGetPostQuery(Number(id))
  const [editMode, setIsEditMode] = useState<boolean>(false)


  return (
    <>
      <GoBackButton/>
      <PostToolbar post={post} setIsEditMode={() => setIsEditMode(!editMode)}/>
      {
        !editMode ? <PostCard post={post}/> : <PostCardEditMode/>
      }
      <BlogFullCoveringSpinner isLoading={isLoading}/>
    </>
  );
}

export default Post;
