import { Box, CardMedia, Typography } from '@mui/material';
import React, {FC} from 'react';
import {BACKEND_BASE_URL} from "../../../common/store/baseQueryWithInterceptor";
import {Post} from "../models/postModels";

const PostContent: FC<{post: Post}> = ({post}) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'baseline'
    }}>
      <CardMedia
        component="img"
        height="200"
        image={`${BACKEND_BASE_URL}/${post.image}`}
      />
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {post.summary}
      </Typography>
      <Typography paragraph={true} gutterBottom>
        {post.content}
      </Typography>
    </Box>
  );
};

export default PostContent;
