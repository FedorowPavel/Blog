import React, {FC} from 'react';
import {Avatar, CardActionArea, CardContent, CardMedia, Container} from "@mui/material";
import {useAppSelector} from "../../../common/store/hooks";
import {BACKEND_BASE_URL} from "../../../common/constants";
import BlogSimpleCard from "../../../common/components/ui/BlogSimpleCard";
import Typography from "@mui/material/Typography";
import {Post} from "../../posts/models/types";

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Mock Post 1',
    summary: 'Post summary. Here can be short text about post content or main theme of the post',
    content: 'Content of the post 1',
    image: '',
    author: 'User nickname 1',
    comments: [],
    rating: 1
  },
  {
    id: 2,
    title: 'Mock Post 2',
    summary: 'Post summary. Here can be short text about post content or main theme of the post',
    content: 'Content of the post 2',
    image: '',
    author: 'User nickname 2',
    comments: [],
    rating: 2
  },
]

const Feed: FC = () => {
  const user = useAppSelector(state => state.authReducer.user)

  return (
    <Container maxWidth="md">

      {/*<pre>{user ? JSON.stringify(user, null, 2) : 'no user'}</pre>*/}
      {/*{*/}
      {/*  user && <Avatar sx={{ width: 200, height: 200 }} src={`${BACKEND_BASE_URL}${user?.image}`}/>*/}
      {/*}*/}
      {/*Feed*/}
      {mockPosts.map(post => {
        return (
          <BlogSimpleCard sxProps={{margin: '40px 0'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={BACKEND_BASE_URL+user?.image}
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
                  {post.author}
                </Typography>
              </CardContent>
            </CardActionArea>
          </BlogSimpleCard>
        )
      })}

    </Container>
  );
};

export default Feed;
