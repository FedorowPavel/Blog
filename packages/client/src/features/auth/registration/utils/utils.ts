import {RegistrationData, registrationDataKeys} from "../models/registrationDataModel";
import {getDataFromSessionStorage} from "../../../../common/utils/sessionStorageUtils";

export function getRegistrationData(file: File): FormData {
  let data = {} as RegistrationData
  registrationDataKeys.forEach(key => {
    data = {
      ...data,
      ...getDataFromSessionStorage(key)
    }
  })
  const formData =  new FormData()
  formData.append('email', data.email)
  formData.append('password', data.password)
  formData.append('image', file)
  formData.append('phone', data.phone)
  formData.append('nickname', data.nickname)
  return formData
}
