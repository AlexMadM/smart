import axios, { type AxiosError, type AxiosRequestConfig } from 'axios'

export const apiInstance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
// apiInstance.interceptors.request.use(config => {
//   const token = localStorage.getItem('accessToken')
//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

//  Response interceptor
// apiInstance.interceptors.response.use(
//   response => response,
//   async (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       try {
//         const response = await axios.post(
//           'https://api.flashcards.andrii.es/v2/auth/refresh-token',
//           {},
//           { withCredentials: true }
//         )
//
//         const newToken = response.data.accessToken
//         localStorage.setItem('accessToken', newToken)
//
//         // Повторяем оригинальный запрос с новым токеном
//         if (error.config && error.config.headers) {
//           error.config.headers.Authorization = `Bearer ${newToken}`
//           return apiInstance(error.config)
//         }
//       } catch (refreshError) {
//         localStorage.removeItem('accessToken')
//         window.location.href = '/auth/signIn'
//         return Promise.reject(refreshError)
//       }
//     }
//     return Promise.reject(error)
//   }
// )

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return apiInstance({
    ...config,
    ...options,
  }).then(r => r.data)
}

export type BodyType<Data> = Data

export type ErrorType<Error> = AxiosError<Error>
