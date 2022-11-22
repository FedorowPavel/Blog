import {CreatePostData} from "../models/postModels";

export function prepareCreatePostData(data: CreatePostData): FormData {
  const formData =  new FormData()
  formData.append('image', data.image)
  formData.append('title', data.title)
  formData.append('summary', data.summary)
  formData.append('content', data.content)
  formData.append('userId', String(data.userId))
  return formData
}
