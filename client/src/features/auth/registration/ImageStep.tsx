import React, {FC, useCallback} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginFormData} from "../login/types";
import {StepProps} from "./models";
import {useCurrentFormValidityState} from "./useCurrentFormValidityState";

const ImageStep: FC<StepProps> = ({setIsCurrentFormValid}) => {
  const {control, handleSubmit, formState: {isValid, errors}, getValues, setValue, watch} = useForm<any>({
      defaultValues: {
      },
      mode: 'all'
    }
  );

  useCurrentFormValidityState(isValid, setIsCurrentFormValid)


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
