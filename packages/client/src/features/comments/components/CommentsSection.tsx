import React from 'react';
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import AddCommentForm from "./AddCommentForm";
import CommentsList from "./CommentsList";


const CommentsSection = () => {

  return (
    <BlogSimpleCard>
      <AddCommentForm/>
      <CommentsList/>
    </BlogSimpleCard>
  );
};

export default CommentsSection;
