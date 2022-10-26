import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {postsApi} from "../store/PostsApi";
import BlogFullCoveringSpinner from "../../../common/components/ui/BlogFullCoveringSpinner";
import {Button} from "@mui/material";
import {ArrowLeft} from "@mui/icons-material";

const SinglePost = () => {
  const {id} = useParams<{id: string}>();
  const {data: post, isLoading} = postsApi.useGetPostQuery(Number(id))
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <>
      <Button onClick={handleGoBack} variant="outlined" startIcon={<ArrowLeft />}>Go Back</Button>
      {
        post ? <pre>{JSON.stringify(post, null, 2)}</pre> : <span>no data</span>
      }
      <BlogFullCoveringSpinner isLoading={isLoading}/>
    </>
  );
};

export default SinglePost;
