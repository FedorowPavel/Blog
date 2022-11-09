import React, {FC, ReactNode} from 'react';
import {Card, SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

interface Props {
  sxProps?:  SxProps<Theme> | undefined,
  children: ReactNode
}

const BlogSimpleCard: FC<Props> = ({sxProps, children}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
        borderRadius: 4,
        boxShadow: 2,
        position: 'relative',
        ...sxProps
      }}
    >
      {children}
    </Card>
  );
};

export default BlogSimpleCard;
