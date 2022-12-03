import React, {FC} from 'react';
import {CommentModel} from "../models/commentModel";
import SingleComment from "./SingleComment";
import { Typography } from '@mui/material';


const CommentsList: FC<{ comments: CommentModel[] | undefined }>= ({comments}) => {

  if(!comments || !comments.length) {
    return <Typography variant="h4">
      No comments yet
    </Typography>
  }

  return (
    <>
      {
        comments.length ? comments.map(comment => <SingleComment comment={comment} key={comment.id}/>) : <p>No comments</p>
      }
    </>
  );
};

export default CommentsList;
