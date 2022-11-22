import { Typography } from '@mui/material';
import React from 'react';
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import GoBackButton from "../../../common/components/ui/GoBackButton";
import CreatePostForm from "./CreatePostForm";


const CreatePost = () => {
  return (
    <>
      <GoBackButton/>
      <Typography variant="h6" component="h1" sx={{ m: 2 }}>
        Create post
      </Typography>
      <BlogSimpleCard>
        <CreatePostForm/>
      </BlogSimpleCard>
    </>
  );
};

export default CreatePost;
