import React, {useState} from 'react';
import {Fab, Tooltip} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BlogModal from "../../../common/components/ui/BlogModal";
import { useNavigate } from 'react-router-dom';

const CreatePostButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen(true)}
      >
        <Tooltip title="Create new post" placement="top">
          <AddIcon />
        </Tooltip>
      </Fab>

      <BlogModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalTitle={'Do you want to create new post?'}
        applyText={'Yes'}
        applyCallback={() => navigate('create-post')}
      />
    </>

  );
};

export default CreatePostButton;
