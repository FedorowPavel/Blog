export interface User {
  id: number,
  email: string,
  banned: boolean,
  banReason: string,
  createdAt: string,
  updatedAt: string,
  roles: Role[],
  posts: Post[]
  nickname: string,
  phone: string,
  image: string,
}

export interface Role {
  id: number,
  value: string,
  description: string,
  createdAt: string,
  updatedAt: string,
}

export interface Post {

}

export interface IGenericResponse {
  status: string;
  message: string;
}
