import {Post} from "../models/postModels";
import {api} from "../../../common/store";
import {User} from "../../../common/models/userModels";
import {CredentialsFormData} from "../../auth/baseAuth/models/types";
import {setUser} from "../../auth/baseAuth/store/reducers/authSlice";
import {setDataToLocalStorage} from "../../../common/utils/localStorageUtils";

export const postsApi = api.injectEndpoints({
  endpoints: (build) =>  ({
    getAllPosts: build.query<Post[], null>({
      providesTags: ['Posts'],
      query: () => ({url: 'posts/all'}),
      transformResponse: (response: Post[]) => response,
    }),
    getPost: build.query<Post, number>({
      query: (id) => ({url: `posts/?id=${id}`}),
      transformResponse: (response: Post) => response,
    }),

    deletePost: build.mutation<{message: string}, {postId: number}>({
      query: ({postId}) => ({
        method: 'DELETE',
        url: `posts`,
        body: {postId: postId},
      }),
      invalidatesTags: ['Posts']
    }),
  })
})



