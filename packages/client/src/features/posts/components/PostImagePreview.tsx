import { Box, CardMedia } from '@mui/material';
import React, {FC} from 'react';
import PageviewIcon from "@mui/icons-material/Pageview";

const PostImagePreview: FC<{ previewUrl: string }> = ({previewUrl}) => {
  return (
    <Box sx={{width: '100%', height: 200}}>
      {
        previewUrl
          ? <CardMedia
            component="img"
            height="200"
            image={previewUrl}
          />
          : <PageviewIcon sx={{width: '100%', height:'100%', opacity: 0.3}}/>
      }
    </Box>
  );
};

export default PostImagePreview;
