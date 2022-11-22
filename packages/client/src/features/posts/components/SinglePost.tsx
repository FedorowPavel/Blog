import React from 'react';
import {useParams} from 'react-router-dom';
import {postsApi} from "../store/api";
import BlogFullCoveringSpinner from "../../../common/components/ui/BlogFullCoveringSpinner";
import {Box} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {BACKEND_BASE_URL} from "../../../common/store/baseQueryWithInterceptor";
import GoBackButton from "../../../common/components/ui/GoBackButton";

const SinglePost = () => {
  const {id} = useParams<{id: string}>();
  const {data: post, isLoading} = postsApi.useGetPostQuery(Number(id))

  return (
    <>
      <GoBackButton/>
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
