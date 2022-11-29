import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Button, FormGroup, TextareaAutosize, TextField, Typography} from '@mui/material';
import PostImagePreview from "./PostImagePreview";
import {CreatePostFormData, Post, UpdatePostFormData} from "../models/postModels";
import {postsApi} from "../store/api";
import {
  getDefaultPreviewUrl,
  getDefaultValues,
  prepareCreatePostData,
  prepareUpdatePostData
} from "../utils/createPostUtils";
import {useAppSelector} from "../../../common/store/hooks";

const labelStyles = { m: '14px 0' }

export interface EditPostConfig {
  isEditMode: boolean,
  post: Post,
  setIsEditMode: Dispatch<SetStateAction<boolean>>
}

const CreatePostForm: FC<{editPostConfig?: EditPostConfig}> = ({editPostConfig}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(getDefaultPreviewUrl(editPostConfig))
  const {user} = useAppSelector(state => state.authReducer)
  const {control, handleSubmit, formState: {isValid}, register, setValue} = useForm<CreatePostFormData>({
      defaultValues: getDefaultValues(editPostConfig),
      mode: 'all'
    }
  );
  const [createPost, {}] = postsApi.useCreatePostMutation()
  const [updatePost, {}] = postsApi.useUpdatePostMutation()

  const onSubmit: SubmitHandler<CreatePostFormData | UpdatePostFormData> = createPostData => {
    if(editPostConfig) {
      updatePost(prepareUpdatePostData({...createPostData, userId: user?.id as number}, editPostConfig.post.id));
      editPostConfig.setIsEditMode(false)
      return
    }
    createPost(prepareCreatePostData({...createPostData, userId: user?.id as number}))
  };

  const handleImageChange = (e: FileList) => {
    setPreviewUrl(URL.createObjectURL(e[0]))
    setValue('image', e[0])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup sx={{ display: "flex",  flexDirection: "column"}}>

        <PostImagePreview previewUrl={previewUrl}/>

        <Button
          variant="outlined"
          component="label"
        >
          {editPostConfig ? 'Change Image' : 'Choose post image'}
          <input
            {...register('image')}
            type="file"
            hidden
            onChange={(e) => handleImageChange(e.target.files as FileList)}
          />
        </Button>

        <Typography variant="h6" component="h1" sx={labelStyles}>
          Post title
        </Typography>
        <Controller
          name="title"
          control={control}
          rules={{
            required:{value: true, message: 'This field is required'},
          }}
          render={({field}) => (
              <TextField
                {...field}
                fullWidth
                autoFocus
                id='title'
                type='text'
                autoComplete='off'/>
          )}
        />

        <Typography variant="h6" component="h1" sx={labelStyles}>
          Post summary
        </Typography>
        <Controller
          name="summary"
          control={control}
          rules={{
            required:{value: true, message: 'This field is required'},
          }}
          render={({field}) => (
            <TextField
              {...field}
              fullWidth
              id='summary'
              type='summary'
              autoComplete='off'/>
          )}
        />

        <Typography variant="h6" component="h1" sx={labelStyles}>
          Post content
        </Typography>
        <Controller
          name="content"
          control={control}
          rules={{
            required:{value: true, message: 'This field is required'},
          }}
          render={({field}) => (
            <TextareaAutosize
              {...field}
              id='content'
              placeholder=""
              style={{
                width: '100%',
                fontFamily: 'Roboto',
                fontSize: '16px',
                lineHeight: '23px',
                borderRadius: '4px',
                boxSizing: 'border-box',
                padding: '14px',
                borderColor: 'rgba(0,0,0,0.3)'
              }}
            />
          )}
        />

        <Button type="submit" disabled={!isValid} variant="contained" sx={{marginTop: '40px', fontSize: '20px'}}>
          {editPostConfig ? 'Edit post' : 'Publish!'}
        </Button>
      </FormGroup>
    </form>
  );
};

export default CreatePostForm;
