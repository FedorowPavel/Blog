import {Post} from "../models/types";
import {api} from "../../../common/store";

export const postsApi = api.injectEndpoints({
  endpoints: (build) =>  ({
    getAllPosts: build.query<Post[], null>({
      query: () => ({url: 'posts/all'}),
      transformResponse: (response: Post[]) => response,
    }),
    getPost: build.query<Post, number>({
      query: (id) => ({url: `posts/?id=${id}`}),
      transformResponse: (response: Post) => response,
    }),
  })
})



