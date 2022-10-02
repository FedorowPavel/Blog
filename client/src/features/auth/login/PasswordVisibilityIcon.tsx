import React, {FC} from 'react';
import {LoginFormData} from "./types";
import {IconButton, InputAdornment} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

interface PasswordVisibilityIconProps {
  watch: () => LoginFormData,
  toggleShowPassword: () => void
}

const PasswordVisibilityIcon: FC<PasswordVisibilityIconProps> = ({watch, toggleShowPassword}) => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={toggleShowPassword}
        edge="end"
      >
        {watch().showPassword ? <VisibilityOff/> : <Visibility/>}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordVisibilityIcon;
