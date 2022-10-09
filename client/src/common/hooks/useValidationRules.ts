export function useValidationRules() {
  const emailRules = {
    required:{value: true, message: 'This field is required'},
    pattern: {value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: 'It is not email'}
  }

  const passwordRules = {
    required: {value: true, message: 'This field is required'},
    minLength: {value: 6, message: 'Min number is 6'},
    maxLength: {value: 12, message: 'Max number is 12'}
  }

  return {emailRules, passwordRules}
}
