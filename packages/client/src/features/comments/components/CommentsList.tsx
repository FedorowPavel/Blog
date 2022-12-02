import React from 'react';
import {CommentModel} from "../models/commentModel";
import {User} from "../../../common/models/userModels";
import SingleComment from "./SingleComment";


const comments: CommentModel[] = [
  {
    text: 'comment text 1',
    author: {nickname: 'name 1', image: 'url'} as User,
    userId: 1,
    postId: 1,
    createdAt: '01-02-2022',
    id: 1,
  },
  {
    text: 'comment text 2',
    author: {nickname: 'name 2', image: 'url'} as User,
    userId: 2,
    postId: 3,
    createdAt: '01-02-2022',
    id: 2
  },
]

const CommentsList = () => {
  return (
    <>
      {
        comments.length ? comments.map(comment => <SingleComment comment={comment} key={comment.id}/>) : <p>No comments</p>
      }
    </>
  );
};

export default CommentsList;
