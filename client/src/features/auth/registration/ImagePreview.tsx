import React, {FC} from 'react';
import {Avatar} from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";

const ImagePreview: FC<{ previewUrl: string }> = ({previewUrl}) => {
  return (
    previewUrl
      ? <Avatar sx={{ width: 200, height: 200 }} src={previewUrl}/>
      : <>
        <Avatar sx={{ width: 200, height: 200 }}>
          <PageviewIcon sx={{ width: 100, height: 100 }}/>
        </Avatar>
        <h3>please select a file</h3>
      </>
  );
};

export default ImagePreview;
