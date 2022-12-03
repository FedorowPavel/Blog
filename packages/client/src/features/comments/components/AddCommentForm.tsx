import {Button, FormGroup, TextField, Typography, Box } from '@mui/material';
import React, {useContext} from 'react';
import { useForm, Controller } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import {commentsApi} from "../store/api";
import {useAppSelector} from "../../../common/store/hooks";
import {PostContext} from "../../posts/store/postContext";

const AddCommentForm = () => {
  const {user} = useAppSelector(state => state.authReducer)
  const postCtx = useContext(PostContext)
  const {control, handleSubmit, formState: {isValid}} = useForm<{comment: string}>({
      defaultValues: {comment: ''},
      mode: 'all'
    }
  );
  const [createComment] = commentsApi.useAddCommentMutation()

  const onSubmit = (data: {comment: string}) => {
    createComment({text: data.comment, userId: user?.id as number, postId: postCtx.post?.id as number})
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup sx={{ display: "flex",  flexDirection: "row"}}>
        <Typography>
          Add comment:
        </Typography>
        <Box sx={{display: "flex",  flexDirection: "row", flexGrow: 1}}>
          <Controller
            name="comment"
            control={control}
            rules={{
              required:{value: true, message: 'Comment can not be empty'},
            }}
            render={({field}) => (
              <TextField
                sx={{m: '0 10px', '& input': {p: 1}}}
                {...field}
                fullWidth
                autoFocus
                id='comment'
                type='text'
                autoComplete='off'/>
            )}
          />


          <Button type="submit" disabled={!isValid} variant="contained" sx={{fontSize: '20px', width: '40px'}}>
            <SendIcon/>
          </Button>
        </Box>
      </FormGroup>
    </form>
  )
}

export default AddCommentForm;
