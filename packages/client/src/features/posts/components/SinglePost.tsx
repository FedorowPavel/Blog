import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {postsApi} from "../store/api";
import BlogFullCoveringSpinner from "../../../common/components/ui/BlogFullCoveringSpinner";
import {Box, Button} from "@mui/material";
import {ArrowLeft} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {BACKEND_BASE_URL} from "../../../common/store/baseQueryWithInterceptor";

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
      <Box sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Avatar alt="Remy Sharp" src={`${BACKEND_BASE_URL}${post?.author.image}`}/>
        <Typography variant="h6" gutterBottom>
          {post?.author.nickname}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">
          {`Created: ${new Date(post?.createdAt as string)}`}
        </Typography>
        {/*<Typography variant="body2">*/}
        {/*  Updated: {new Date(post?.updatedAt)}*/}
        {/*</Typography>*/}
      </Box>
      <BlogFullCoveringSpinner isLoading={isLoading}/>
    </>
  );
};

export default SinglePost;
