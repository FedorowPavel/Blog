import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Post} from "../models/types";

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/posts",
    credentials: 'include',
  }),
  tagTypes: ['Posts'],
  endpoints: (build) =>  ({
    getAllPosts: build.query<Post[], null>({
      query: () => ({url: '/all'}),
      transformResponse: (response: Post[]) => response,
    }),
    getPost: build.query<Post, number>({
      query: (id) => ({url: `?id=${id}`}),
      transformResponse: (response: Post) => response,
    }),
  })
})



