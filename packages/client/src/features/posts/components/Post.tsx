import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {postsApi} from "../store/api";
import BlogFullCoveringSpinner from "../../../common/components/ui/BlogFullCoveringSpinner";
import GoBackButton from "../../../common/components/ui/GoBackButton";
import PostCard from "./PostCard";
import PostCardEditMode from './PostCardEditMode';
import PostToolbar from "./PostToolbar";
import {useAppSelector} from "../../../common/store/hooks";
import {PostContext} from "../store/postContext";

const Post = () => {
  const {user} = useAppSelector(state => state.authReducer)
  const [editMode, setIsEditMode] = useState<boolean>(false)

  const {id} = useParams<{id: string}>();
  const {data: post, isLoading, isFetching} = postsApi.useGetPostQuery(Number(id))
  const isToolBarShown = user?.id === post?.author.id

  return (
    <PostContext.Provider value={{editMode, setIsEditMode, post}}>
      <GoBackButton/>
      {
        isToolBarShown ? <PostToolbar/> : null
      }
      {
        !editMode ? <PostCard/> : <PostCardEditMode/>
      }
      <BlogFullCoveringSpinner isLoading={isLoading || isFetching}/>
    </PostContext.Provider>
  );
}

export default Post;
