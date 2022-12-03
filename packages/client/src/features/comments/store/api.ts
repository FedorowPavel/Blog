import {api} from "../../../common/store";
import {CommentModel, CreateCommentData} from "../models/commentModel";

export const commentsApi = api.injectEndpoints({
  endpoints: (build) =>  ({
    getPostComments: build.query<CommentModel[], number>({
      providesTags: ['Comments'],
      query: (postId) => ({url: `comments/?postId=${postId}`}),
    }),

    addComment: build.mutation<CommentModel, CreateCommentData>({
      query: (data) => ({
        method: 'POST',
        url: `comments`,
        body: data,
      }),
      invalidatesTags: ['Comments']
    }),

    deleteComment: build.mutation<{message: string}, {commentId: number}>({
      query: ({commentId}) => ({
        method: 'DELETE',
        url: `comments/?id=${commentId}`,
      }),
      invalidatesTags: ['Comments']
    }),

    // updatePostRating: build.mutation<{message: string}, {postId: number, delta: number}>({
    //   query: ({postId, delta}) => ({
    //     method: 'PUT',
    //     url: `posts/updateRating`,
    //     body: {postId: postId, delta: delta},
    //   }),
    //   invalidatesTags: ['Posts']
    // }),
  })
})



