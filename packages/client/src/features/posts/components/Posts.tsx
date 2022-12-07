import React, {useEffect, useState} from 'react';
import {QueryFixedCacheKeysENUM} from "../../../common/constants/queryCacheKeys";
import {postsApi} from "../store/api";
import BlogFullCoveringSpinner from "../../../common/components/ui/BlogFullCoveringSpinner";
import PostPreviewCard from "./PostPreviewCard";
import {useToast} from "../../../common/hooks/useToast";
import CreatePostButton from "./CreatePostButton";
import { Pagination } from '@mui/material';
import {PaginationConfigModel} from "../models/paginationConfigModel";

const initialPaginationConfig: PaginationConfigModel = {
  offset: 0,
  postsPerPage: 3
}

const Posts = () => {
  const [paginationConfig, setPaginationConfig] = useState<PaginationConfigModel>(initialPaginationConfig)

  const {data, isLoading, isFetching} = postsApi.useGetPagePostsQuery(paginationConfig, {refetchOnMountOrArgChange: true})

  const changePageHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    setPaginationConfig({...paginationConfig, offset: value - 1})
  }

  return (
    <>
      {
        data
          ? <>
            {data.posts.map(post => <PostPreviewCard post={post} key={post.id}/>)}
            <Pagination
              count={Math.ceil(data.totalAmount/paginationConfig.postsPerPage)}
              variant="outlined"
              shape="rounded"
              color="primary"
              page={paginationConfig.offset + 1}
              onChange={changePageHandler}
              sx={{m: '20px auto'}}
            />
          </>
          : <h1>No posts</h1>
      }
      <CreatePostButton/>

      <BlogFullCoveringSpinner isLoading={isLoading || isFetching}/>
    </>
  )
};

export default Posts;
