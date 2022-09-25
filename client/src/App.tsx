import React from 'react';
import {useTheme} from "@mui/styles";
import {Typography} from "@mui/material";
import {BlogTheme} from "@mui/material/styles";

function App() {
  const theme = useTheme<BlogTheme>()

  return (
    <Typography
      variant={"h4"}
      sx={{
        color: theme.bgColors.regular
      }}
    >
      My Blog
    </Typography>
  );
}

export default App;
