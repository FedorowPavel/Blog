import {CreatePostData, CreatePostFormData} from "../models/postModels";
import {EditPostConfig} from "../components/CreatePostForm";
import {BACKEND_BASE_URL} from "../../../common/store/baseQueryWithInterceptor";

export function prepareCreatePostData(data: CreatePostData): FormData {
  const formData =  new FormData()
  formData.append('image', data.image)
  formData.append('title', data.title)
  formData.append('summary', data.summary)
  formData.append('content', data.content)
  formData.append('userId', String(data.userId))
  return formData
}

export const getDefaultValues = (editPostConfig?: EditPostConfig): Partial<CreatePostFormData> => {
  if(editPostConfig) {
    return {
      title: editPostConfig.post.title,
      summary: editPostConfig.post.summary,
      content: editPostConfig.post.content,
    }
  }
  return {
    title: '',
    summary: '',
    content: '',
    image: undefined
  }
}

export const getDefaultPreviewUrl = (editPostConfig?: EditPostConfig) => {
  return editPostConfig ? `${BACKEND_BASE_URL}/${editPostConfig.post.image}` : ''
}
