import React, {FC, useCallback} from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {LoginFormData, LoginFormFieldsEnum} from "../login/types";
import {Button, FormGroup, Input, TextField} from "@mui/material";
import FormFieldWrapper from "../../../common/components/wrappers/FormFieldWrapper";
import PasswordVisibilityIcon from "../login/PasswordVisibilityIcon";

const ImageStep: FC = () => {
  const {control, handleSubmit, formState: {isValid, errors}, getValues, setValue, watch} = useForm<any>({
      defaultValues: {
      },
      mode: 'all'
    }
  );
  const onSubmit: SubmitHandler<LoginFormData> = data => {
    console.log(data)
  };

  const toggleShowPassword = useCallback(() => {
    setValue('showPassword', !getValues().showPassword)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}></form>
  );


};

export default ImageStep;
