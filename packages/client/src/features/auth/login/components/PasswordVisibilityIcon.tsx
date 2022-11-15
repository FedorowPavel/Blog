import React, {FC} from 'react';
import {IconButton, InputAdornment} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {CredentialsFormData} from "../../baseAuth/models/types";

interface PasswordVisibilityIconProps {
  watch: () => CredentialsFormData,
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
