import {registrationDataKeys} from "../../features/auth/registration/models/registrationDataModel";

export function setDataToSessionStorage<Data>(data: Data, key: string): void {
  sessionStorage.setItem(key, JSON.stringify(data))
}


export function removeDataFromSessionStorage(key: string): void {
  sessionStorage.removeItem(key)
}

export function clearStoredRegistrationData(): void {
  registrationDataKeys.forEach(key => {
    removeDataFromSessionStorage(key)
  })
}

export function getDataFromSessionStorage<Data>(key: string): Data {
  return JSON.parse(sessionStorage.getItem(key) as string)
}
