import { useMutation, useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { authControllerMe, authControllerSignIn } from './auth-service.ts'
import { useNavigate } from 'react-router'

export function useSignInForm() {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<{
    email: string
    password: string
    rememberMe: boolean
  }>()

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess(data) {
      console.log('Успешный вход:', data)
      localStorage.setItem('accessToken', data.accessToken)
      const payload = data.accessToken.split('.')[1]
      const id = JSON.parse(atob(payload)).userId
      navigate('/cards')
    },
  })

  const errorMessage = signInMutation.error ? 'Sign in faled' : undefined

  return {
    register,
    errorMessage,
    handleSubmit: handleSubmit(data => signInMutation.mutate(data)),
    isPending: signInMutation.isPending,
  }
}
const accountKey = ['me']

export function useAccountMe() {
  return useQuery({
    queryKey: accountKey,
    queryFn: authControllerMe,
    retry: 0,
  })
}
