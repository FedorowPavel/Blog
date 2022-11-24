import React, {FC, useState} from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {DeleteButtonProps} from "../models/toolbarButtonsModels";
import {postsApi} from "../store/api";
import {QueryFixedCacheKeysENUM} from "../../../common/constants/queryCacheKeys";
import BlogModal from "../../../common/components/ui/BlogModal";
import { useNavigate } from 'react-router-dom';


const DeletePostButton: FC<DeleteButtonProps> = ({isShown, post, navigateTo}) => {
  const [deletePost] = postsApi.useDeletePostMutation({
    fixedCacheKey: QueryFixedCacheKeysENUM.DELETE_POST,
  })
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)

  if(!isShown) {
    return null
  }

  const handleDelete = () => {
    deletePost({postId: post?.id as number})
    if(navigateTo) {
      navigate('/feed')
    }
  }

  return (
    <>
      <DeleteForeverIcon
        sx={{alignSelf: 'end', cursor: 'pointer'}}
        onClick={() => setIsDeleteModalOpen(true)}
      />

      <BlogModal
        modalTitle={'Do you really want to delete this post?'}
        modalText={`${post?.title}`}
        applyText={'Delete'}
        applyCallback={handleDelete}
        applyButtonConfig={{color: 'error'}}
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      />
    </>

  );
};

export default DeletePostButton;
