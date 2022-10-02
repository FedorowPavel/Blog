import React, {FC} from 'react';
import {Typography} from "@mui/material";
import {Variant} from "@mui/material/styles/createTypography";

interface TitleProps {
  title: string,
  variant: Variant,
  color?: string,
  gutterBottom?: boolean,
}

const Title: FC<TitleProps> = (
  {
    title,
    variant,
    color= 'text.primary',
    gutterBottom= false
  }
) => {
  return (
    <Typography
      variant={variant}
      color={color}
      gutterBottom={gutterBottom}
      sx={{marginBottom: 3}}
    >
      {title}
    </Typography>
  );
};

export default Title;
