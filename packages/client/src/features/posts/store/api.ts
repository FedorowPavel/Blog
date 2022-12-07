import {Post} from "../models/postModels";
import {api} from "../../../common/store";
import {PaginationConfigModel} from "../models/paginationConfigModel";

export interface GetPagePostsModel {
  posts: Post[],
  totalAmount: number
}

export const postsApi = api.injectEndpoints({
  endpoints: (build) =>  ({
    getAllPosts: build.query<Post[], null>({
      providesTags: ['Posts'],
      query: () => ({url: 'posts/all'}),
      transformResponse: (response: Post[]) => response,
    }),

    getPagePosts: build.query<GetPagePostsModel, PaginationConfigModel>({
      providesTags: ['PagePosts'],
      query: ({offset, postsPerPage}) => ({url: `posts/page/?offset=${offset}&limit=${postsPerPage}`}),
      transformResponse: (response: GetPagePostsModel) => response,
    }),

    getPost: build.query<Post, number>({
      providesTags: ['SinglePost'],
      query: (id) => ({url: `posts/?id=${id}`}),
      transformResponse: (response: Post) => response,
    }),

    createPost: build.mutation<Post, FormData>({
      query: (data) => ({
        method: 'POST',
        url: `posts`,
        body: data,
      }),
      invalidatesTags: ['Posts']
    }),

    updatePost: build.mutation<Post, FormData>({
      query: (data) => ({
        method: 'PUT',
        url: `posts`,
        body: data,
      }),
      invalidatesTags: ['SinglePost', 'Posts']
    }),

    deletePost: build.mutation<{message: string}, {postId: number}>({
      query: ({postId}) => ({
        method: 'DELETE',
        url: `posts`,
        body: {postId: postId},
      }),
      invalidatesTags: ['PagePosts']
    }),

    updatePostRating: build.mutation<{message: string}, {postId: number, delta: number}>({
      query: ({postId, delta}) => ({
        method: 'PUT',
        url: `posts/updateRating`,
        body: {postId: postId, delta: delta},
      }),
      invalidatesTags: ['PagePosts']
    }),
  })
})



