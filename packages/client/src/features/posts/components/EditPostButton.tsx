import React, {FC, useContext} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {EditButtonProps} from "../models/toolbarButtonsModels";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {PostContext} from "../store/postContext";


const EditPostButton: FC<EditButtonProps> = () => {
  const postCtx = useContext(PostContext)

  return (
    <>
      {
        !postCtx?.editMode
          ? <EditIcon
              sx={{alignSelf: 'end', cursor: 'pointer'}}
              onClick={() => postCtx?.setIsEditMode(!postCtx?.editMode)}
            />
          : <RemoveRedEyeIcon
            sx={{alignSelf: 'end', cursor: 'pointer'}}
            onClick={() => postCtx?.setIsEditMode(!postCtx?.editMode)}
          />
      }
    </>
  );
};

export default EditPostButton;
