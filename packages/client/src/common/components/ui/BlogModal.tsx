import {Box, Button, ButtonProps, Modal, Typography } from '@mui/material';
import React, {FC, ReactNode} from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: 4,
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface BlogModalProps {
  isOpen: boolean,
  setIsOpen: (arg: boolean) => void,
  modalTitle: string,
  modalText: string,
  applyCallback?: () => void,
  applyButtonConfig?: ButtonProps,
  applyText: string,
  cancelCallback?: () => void,
  cancelButtonConfig?: ButtonProps,
  cancelText?: string,
  customElement?: ReactNode | JSX.Element
}

const BlogModal: FC<BlogModalProps> = ({
   isOpen,
   setIsOpen,
   modalTitle,
   modalText,
   applyButtonConfig,
   applyText,
   applyCallback,
   cancelButtonConfig,
   cancelCallback,
   cancelText = 'Cancel',
   customElement
}) => {
  const defaultBtnConfig: ButtonProps = {
    variant: 'contained',
    color: 'primary'
  }

  const applyConfig = {...defaultBtnConfig, ...applyButtonConfig}
  const cancelConfig = {...defaultBtnConfig, ...cancelButtonConfig}

  const handleCancel = () => {
    if(cancelCallback) {
      cancelCallback()
    }
    setIsOpen(false)
  }

  const handleApply = () => {
    if(applyCallback) {
      applyCallback()
    }
    setIsOpen(false)
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ m: 2 , textTransform: 'uppercase'}}>
            {modalText}
          </Typography>
          {customElement ? customElement : null}
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Button onClick={() => handleCancel()} {...cancelConfig}>
              {cancelText}
            </Button>
            <Button onClick={() => handleApply()} {...applyConfig}>
              {applyText}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default BlogModal;
