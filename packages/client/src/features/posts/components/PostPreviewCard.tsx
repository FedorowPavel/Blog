import {Box, ButtonProps, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, {FC, useState} from 'react';
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {QueryFixedCacheKeysENUM} from "../../../common/constants/queryCacheKeys";
import {Post} from "../models/postModels";
import {useAppSelector} from "../../../common/store/hooks";
import {useLocation, useNavigate } from 'react-router-dom';
import {postsApi} from "../store/api";
import {BACKEND_BASE_URL} from "../../../common/store/baseQueryWithInterceptor";
import BlogModal from "../../../common/components/ui/BlogModal";
import DeletePostButton from "./DeletePostButton";
import PostRating from "./PostRating";

interface PostCardProps {
  post: Post,
}

const PostPreviewCard: FC<PostCardProps> = ({post}) => {
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
        <Box sx={{display: 'flex', flexDirection: 'row'}}>

          <PostRating postRating={post.rating} postId={post.id}/>

          <Box sx={{flexGrow: 1}}>
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
              </CardContent>
            </CardActionArea>

            <DeletePostButton
              isShown={user?.id === author.id}
              post={post}
            />
          </Box>
        </Box>

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

export default PostPreviewCard;
