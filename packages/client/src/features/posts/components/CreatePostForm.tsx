import React, {useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {Button, FormGroup, TextareaAutosize, TextField, Typography} from '@mui/material';
import PostImagePreview from "./PostImagePreview";
import {CreatePostFormData} from "../models/postModels";

const labelStyles = { m: '14px 0' }

const CreatePostForm = () => {
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const navigate = useNavigate()
  const {control, handleSubmit, formState: {isValid, errors}, register, setValue} = useForm<CreatePostFormData>({
      defaultValues: {
        image: undefined,
        title: '',
        summary: '',
        content: ''
      },
      mode: 'all'
    }
  );

  const onSubmit: SubmitHandler<CreatePostFormData> = createPostData => {
    console.log(createPostData)
    // loginUser({loginData, navigate})
  };

  const handleInputChange = (e: FileList) => {
    console.log(e[0])
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
          Choose post image
          <input
            {...register('image')}
            type="file"
            hidden
            onChange={(e) => handleInputChange(e.target.files as FileList)}
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

        <Button type="submit" disabled={!isValid} variant="contained" sx={{marginTop: '40px', fontSize: '20px'}}>Publish!</Button>
      </FormGroup>
    </form>
  );
};

export default CreatePostForm;
