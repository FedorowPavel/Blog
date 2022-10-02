import React, {FC, PropsWithChildren} from 'react';
import {Box} from "@mui/material";

const FormFieldWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <Box sx={{
      minHeight: '100px',
    }}>
      {children}
    </Box>
  );
};

export default FormFieldWrapper;
