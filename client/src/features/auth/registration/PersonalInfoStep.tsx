import React, {FC, useCallback} from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {LoginFormData, LoginFormFieldsEnum, PersonalInfoFormData} from "../login/types";
import {Button, FormGroup, MenuItem, Select, TextField} from "@mui/material";
import FormFieldWrapper from "../../../common/components/wrappers/FormFieldWrapper";
import PasswordVisibilityIcon from "../login/PasswordVisibilityIcon";

const PersonalInfoStep: FC = () => {
  const {control, handleSubmit, formState: {isValid, errors}, getValues, setValue, watch} = useForm<PersonalInfoFormData>({
      defaultValues: {
        phone: '',
        gender: '',
        nationality: ''
      },
      mode: 'all'
    }
  );
  const onSubmit: SubmitHandler<PersonalInfoFormData> = data => {
    console.log(data)
  };

  const toggleShowPassword = useCallback(() => {
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup sx={{ display: "flex",  flexDirection: "column"}}>

        <Controller
          name="phone"
          control={control}
          render={({field}) => (
            <FormFieldWrapper>
              <TextField
                {...field}
                fullWidth
                autoFocus
                id='phone'
                type='tel'
                label='Phone'
                autoComplete='off'
              />
            </FormFieldWrapper>
          )}
        />

        <Controller
          name="nationality"
          control={control}
          render={({field}) => (
            <FormFieldWrapper>
              <TextField
                {...field}
                fullWidth
                autoFocus
                id='nationality'
                type='text'
                label='Nationality'
                autoComplete='off'
              />
            </FormFieldWrapper>
          )}
        />

      </FormGroup>
    </form>
  );


};

export default PersonalInfoStep;
