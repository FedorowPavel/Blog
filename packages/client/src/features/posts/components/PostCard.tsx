import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, {FC} from 'react';
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {BACKEND_BASE_URL, QueryFixedCacheKeysENUM} from "../../../common/constants";
import {Post} from "../models/postModels";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useAppSelector} from "../../../common/store/hooks";
import {useLocation, useNavigate } from 'react-router-dom';
import {postsApi} from "../store/api";

interface PostCardProps {
  post: Post,
}

const PostCard: FC<PostCardProps> = ({post}) => {
  const {user} = useAppSelector(state => state.authReducer)
  const navigate = useNavigate()
  const location = useLocation()
  const [deletePost] = postsApi.useDeletePostMutation({
    fixedCacheKey: QueryFixedCacheKeysENUM.DELETE_POST,
  })

  const openSinglePost = (id: number) => {
    navigate(`${location.pathname}/${id}`, {relative: 'path'})
  }

  return (
    <BlogSimpleCard sxProps={{margin: '40px 0'}} key={post.id}>
      <CardActionArea onClick={() => openSinglePost(post.id)}>
        <CardMedia
          component="img"
          height="140"
          image={BACKEND_BASE_URL+post.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {post.summary}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {post.author.nickname}
          </Typography>
        </CardContent>
      </CardActionArea>
      {
        user?.id === post.author.id
          ? <DeleteForeverIcon
            sx={{alignSelf: 'end', cursor: 'pointer'}}
            onClick={() => {deletePost({postId: post.id})}}/>
          : null
      }
    </BlogSimpleCard>
  );
};

export default PostCard;
