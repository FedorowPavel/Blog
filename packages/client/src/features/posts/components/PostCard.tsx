import {ButtonProps, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, {FC, useState} from 'react';
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {QueryFixedCacheKeysENUM} from "../../../common/constants/queryCacheKeys";
import {Post} from "../models/postModels";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useAppSelector} from "../../../common/store/hooks";
import {useLocation, useNavigate } from 'react-router-dom';
import {postsApi} from "../store/api";
import {BACKEND_BASE_URL} from "../../../common/store/baseQueryWithInterceptor";
import BlogModal from "../../../common/components/ui/BlogModal";
import DeletePostButton from "./DeletePostButton";

interface PostCardProps {
  post: Post,
}

const PostCard: FC<PostCardProps> = ({post}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
  const {user} = useAppSelector(state => state.authReducer)
  const navigate = useNavigate()
  const location = useLocation()
  const [deletePost] = postsApi.useDeletePostMutation({
    fixedCacheKey: QueryFixedCacheKeysENUM.DELETE_POST,
  })
  const {id, image, title, author, summary} = post

  const openSinglePost = (id: number) => {
    navigate(`${location.pathname}/${id}`, {relative: 'path'})
  }

  const applyButtonConfig: ButtonProps = {
    variant: 'contained',
    color: 'error'
  }

  return (
    <>
      <BlogSimpleCard sxProps={{margin: '40px 0'}} key={id}>
        <CardActionArea onClick={() => openSinglePost(id)}>
          <CardMedia
            component="img"
            height="140"
            image={BACKEND_BASE_URL+image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {author.nickname}
            </Typography>
          </CardContent>
        </CardActionArea>

        <DeletePostButton
          isShown={user?.id === author.id}
          cb={() => setIsDeleteModalOpen(true)}
        />

      </BlogSimpleCard>

      <BlogModal
        modalTitle={'Do you really want to delete this post?'}
        modalText={`${title}`}
        applyText={'Delete'}
        applyCallback={() => deletePost({postId: id})}
        isOpen={isDeleteModalOpen}
        applyButtonConfig={applyButtonConfig}
        setIsOpen={setIsDeleteModalOpen}
      />
    </>

  );
};

export default PostCard;
