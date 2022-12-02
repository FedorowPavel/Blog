import React, {FC} from 'react';
import {CommentModel} from "../models/commentModel";
import {Avatar, BlogTheme, Box, Divider, Typography } from '@mui/material';
import {BACKEND_BASE_URL} from "../../../common/store/baseQueryWithInterceptor";


const SingleComment: FC<{comment: CommentModel}>= ({comment}) => {
  const {text, author, createdAt} = comment


  return (
    <>
      <Divider sx={{mt: 3, mb: 3}}/>
      <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mr: 4}}>
          <Avatar alt="Photo" src={`${BACKEND_BASE_URL}${comment?.author.image}`} />
          <Typography>
            {author.nickname}
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}>
          <Typography sx={{fontStyle: 'italic'}}>
            {text}
          </Typography>
          <Typography sx={{alignSelf: 'flex-end', color: 'gray'}}>
            {createdAt}
          </Typography>
        </Box>

      </Box>
    </>
  )
};

export default SingleComment;
