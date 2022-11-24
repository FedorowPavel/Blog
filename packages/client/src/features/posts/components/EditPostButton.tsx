import React, {FC} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {EditButtonProps} from "../models/toolbarButtonsModels";


const EditPostButton: FC<EditButtonProps> = ({isShown, cb}) => {
  return (
    <EditIcon
      sx={{alignSelf: 'end', cursor: 'pointer'}}
      onClick={() => cb()}
    />
  );
};

export default EditPostButton;
