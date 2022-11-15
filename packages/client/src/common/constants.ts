export const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL || 'http://localhost:5000/'

export enum QueryFixedCacheKeysENUM {
  LOGIN_USER = 'login-user',
  REGISTER_USER = 'register-user',
  DELETE_POST = 'delete-post'
}
