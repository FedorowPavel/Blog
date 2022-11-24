import React, {FC} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {EditButtonProps} from "../models/toolbarButtonsModels";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const EditPostButton: FC<EditButtonProps> = ({cb, isEditMode}) => {
  return (
    <>
      {
        !isEditMode
          ? <EditIcon
              sx={{alignSelf: 'end', cursor: 'pointer'}}
              onClick={() => cb()}
            />
          : <RemoveRedEyeIcon
            sx={{alignSelf: 'end', cursor: 'pointer'}}
            onClick={() => cb()}
          />
      }
    </>
  );
};

export default EditPostButton;
