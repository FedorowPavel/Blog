import React from 'react';
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import {CardActionArea, CardContent, CardMedia} from "@mui/material";
import {BACKEND_BASE_URL} from "../../../common/constants";
import Typography from "@mui/material/Typography";
import {postsApi} from "../store/PostsApi";
import {useLocation, useNavigate} from "react-router-dom";
import BlogFullCoveringSpinner from "../../../common/components/ui/BlogFullCoveringSpinner";
import {useAppSelector} from "../../../common/store/hooks";
import {useToast} from "../../../common/hooks/useToast";

const Posts = () => {
  const {user} = useAppSelector(state => state.authReducer)
  const {data: posts, isLoading, error} = postsApi.useGetAllPostsQuery(null)
  useToast(error)

  const navigate = useNavigate()
  const location = useLocation()

  const openSinglePost = (id: number) => {
    navigate(`${location.pathname}/${id}`, {relative: 'path'})
  }

  return (
    <>
      {posts
        ? posts.map(post => {
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
              {user?.id === post.author.id ? <p>Your post</p> : null}
            </BlogSimpleCard>

          )
        })
        : <h1>No posts</h1>
      }
      <BlogFullCoveringSpinner isLoading={isLoading}/>
    </>
  )
};

export default Posts;
