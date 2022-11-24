import {Avatar, Box, Typography } from '@mui/material';
import React, {FC} from 'react';
import {BACKEND_BASE_URL} from "../../../common/store/baseQueryWithInterceptor";
import {Post} from "../models/postModels";

const PostMetainfo: FC<{post: Post}> = ({post}) => {
  return (
    <Box sx={{mb: 4}}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
      }}>
        <Typography variant="h6" gutterBottom sx={{fontStyle: 'italic', mr: 2}}>
          Created by:
        </Typography>
        <Typography variant="h6" gutterBottom sx={{flexGrow: 1}}>
          {post?.author.nickname}
        </Typography>
        <Avatar alt="Remy Sharp" src={`${BACKEND_BASE_URL}${post?.author.image}`} sx={{mr: 2}}/>
      </Box>
      <Box sx={{opacity: 0.6, fontStyle: 'italic'}}>
        <Typography variant="body2">
          {`Published: ${new Date(post?.createdAt as string)}`}
        </Typography>
        <Typography variant="body2">
          {`Last edited: ${new Date(post?.updatedAt as string)}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default PostMetainfo;
