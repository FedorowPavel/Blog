import React, {FC} from 'react';
import {Box, Typography} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {postsApi} from "../store/api";

const PostRating: FC<{postRating: number, postId: number}> = ({postId, postRating}) => {
  const [updatePostRating] = postsApi.useUpdatePostRatingMutation()

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 4}}>
      <ExpandLessIcon sx={{cursor: 'pointer'}} onClick={() => updatePostRating({postId, delta: 1})}/>
      <Typography variant="h5">
        {postRating}
      </Typography>
      <ExpandMoreIcon sx={{cursor: 'pointer'}} onClick={() => updatePostRating({postId, delta: -1})}/>
    </Box>
  );
};

export default PostRating;
