import React, {FC} from 'react';
import {Controller, useForm} from "react-hook-form";
import { FormGroup, TextField} from "@mui/material";
import FormFieldWrapper from "../../../../common/components/wrappers/FormFieldWrapper";
import {useCurrentFormValidityState} from "../hooks/useCurrentFormValidityState";
import {getDataFromSessionStorage, getValidationRules} from "../../../../common/utils/utils";
import {useRegistrationFormDataChange} from "../hooks/useRegistrationFormDataChange";
import {PersonalInfoFormData, RegistrationFormFieldsEnum, RegistrationStorageKeys, StepProps} from "../models/types";

const defaultValues = {
  phone: '',
  nickname: ''
}

const PersonalInfoStep: FC<StepProps> = ({setIsCurrentFormValid}) => {
  const {control, formState: {isValid, errors}, watch} = useForm<PersonalInfoFormData>({
    defaultValues: getDataFromSessionStorage(RegistrationStorageKeys.PERSONAL_INFO) || defaultValues,
    mode: 'all'
  });
  const {requiredRule} = getValidationRules()

  useCurrentFormValidityState(isValid, setIsCurrentFormValid)
  useRegistrationFormDataChange(watch, RegistrationStorageKeys.PERSONAL_INFO)

  return (
    <form>
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
          name="nickname"
          control={control}
          rules={requiredRule}
          render={({field}) => (
            <FormFieldWrapper>
              <TextField
                {...field}
                fullWidth
                autoFocus
                error={!!errors[RegistrationFormFieldsEnum.NICKNAME]}
                helperText={errors[RegistrationFormFieldsEnum.NICKNAME]?.message}
                id='nickname'
                type='text'
                label='Nickname'
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
