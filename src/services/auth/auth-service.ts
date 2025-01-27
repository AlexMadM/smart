import { BodyType, createInstance } from '../../axios/axios-instans.ts'
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never
type UserCredentials = {
  password: string
  email: string
  rememberMe: boolean
}

type Tokens = {
  accessToken: string
  refreshToken: string
}

export type UserData = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export const authControllerSignIn = (
  signInBodyDto: BodyType<UserCredentials>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<Tokens>(
    {
      url: '/v1/auth/login',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: signInBodyDto,
    },
    options
  )
}

export const authControllerMe = (options?: SecondParameter<typeof createInstance>) => {
  return createInstance<UserData>(
    {
      url: '/v1/auth/me',
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    },
    options
  )
}
