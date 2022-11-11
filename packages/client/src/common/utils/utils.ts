import {registrationDataKeys} from "../../features/auth/registration/models/types";

export function getValidationRules() {
  const emailRules = {
    required:{value: true, message: 'This field is required'},
    pattern: {value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: 'It is not email'}
  }

  const passwordRules = {
    required: {value: true, message: 'This field is required'},
    minLength: {value: 6, message: 'Min number is 6'},
    maxLength: {value: 12, message: 'Max number is 12'}
  }

  const requiredRule = {
    required: {value: true, message: 'This field is required'},
  }
  return {emailRules, passwordRules, requiredRule}
}

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

export function setDataToLocalStorage<Data>(data: Data, key: string): void {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getDataFromLocalStorage<Data>(key: string): Data {
  return JSON.parse(localStorage.getItem(key) as string)
}

export function removeDataFromLocalStorage(key: string): void {
  localStorage.removeItem(key)
}




