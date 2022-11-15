import React, {FC} from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface DeleteButtonProps {
  isShown: boolean,
  cb: () => void
}

const DeletePostButton: FC<DeleteButtonProps> = ({isShown, cb}) => {
  if(!isShown) {
    return null
  }

  return (
    <DeleteForeverIcon
      sx={{alignSelf: 'end', cursor: 'pointer'}}
      onClick={() => cb()}
    />
  );
};

export default DeletePostButton;
