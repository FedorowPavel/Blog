import React, {FC} from 'react';
import {Typography} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";

interface TitleProps {
  title: string,
  variant?: Variant,
  color?: string,
  gutterBottom?: boolean,
}

const BlogTitle: FC<TitleProps> = (
  {
    title,
    variant = 'h4',
    color= 'text.primary',
    gutterBottom= false
  }
) => {
  return (
    <Typography
      textAlign={"center"}
      variant={variant}
      color={color}
      gutterBottom={gutterBottom}
      sx={{marginBottom: 3}}
    >
      {title}
    </Typography>
  );
};

export default BlogTitle;
