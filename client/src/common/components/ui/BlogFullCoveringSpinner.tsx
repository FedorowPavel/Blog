import React, {FC} from 'react';
import {GridLoader} from "react-spinners";
import {Box, useTheme} from "@mui/material";

const BlogFullCoveringSpinner: FC<{isLoading: boolean}> = ({isLoading}) => {
  const theme = useTheme()

  if(!isLoading) {
    return null
  }

  return (
    <Box sx={{
      position: 'absolute',
      top: '50%',
      right: '50%',
      transform: 'translate(50%, -50%)',
      backgroundColor: `${theme.palette.grey["400"]}` + 'bb',
      height: '100%',
      width: '100%',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
      borderRadius: 4,
    }}>
      <GridLoader
        color={theme.palette.primary.dark}
        loading={true}
      />
    </Box>

  );
};

export default BlogFullCoveringSpinner;
