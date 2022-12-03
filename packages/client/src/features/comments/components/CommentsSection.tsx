import React from 'react';
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import AddCommentForm from "./AddCommentForm";
import CommentsList from "./CommentsList";
import {useAppSelector} from "../../../common/store/hooks";
import { useParams } from 'react-router-dom';
import {commentsApi} from "../store/api";
import BlogFullCoveringSpinner from "../../../common/components/ui/BlogFullCoveringSpinner";


const CommentsSection = () => {
  const {user} = useAppSelector(state => state.authReducer)
  const {id: postId} = useParams<{id: string}>();
  const {data: postComments, isFetching, isLoading} = commentsApi.useGetPostCommentsQuery(Number(postId))

  return (
    <BlogSimpleCard>
      <AddCommentForm/>
      <CommentsList comments={postComments}/>
      <BlogFullCoveringSpinner isLoading={isLoading || isFetching}/>
    </BlogSimpleCard>
  );
};

export default CommentsSection;
