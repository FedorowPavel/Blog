import {RegistrationData, registrationDataKeys} from "./types";
import {getDataFromSessionStorage} from "../../../common/utils/utils";

export function getRegistrationData(file: FileList): RegistrationData {
  let data = {}
  registrationDataKeys.forEach(key => {
    data = {
      ...data,
      ...getDataFromSessionStorage(key)
    }
  })
  return {...data, image: file} as unknown as RegistrationData
}
