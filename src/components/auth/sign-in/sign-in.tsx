import { useForm } from 'react-hook-form'
import { Button, Card, Typography } from '../../ui'
import { Input } from '../../ui/text-field/input.tsx'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormCheckbox } from '../../ui/form/form-checkbox.tsx'
import { Link } from 'lucide-react'
import { useSignInForm } from '../../../services/auth/auth-hooks.ts'

const loginSchema = z.object({
  email: z.string().min(1, 'Required').email('Неверный адрес электронной почты'),
  password: z.string({ required_error: 'Required' }).min(1, 'Required').min(3, 'Минимум 3 символа'),
  rememberMe: z.boolean().optional(),
})

type LoginFields = z.infer<typeof loginSchema>

const SignIn = () => {
  const { control } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
  })

  const { handleSubmit, register } = useSignInForm()

  return (
    <Card className="bg-dark-700  text-white rounded-sm w-[420px] flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        {' '}
        <div className="w-[350px] flex flex-col items-center self-center ">
          <Typography className="text-center mb-6 mt-8 text-2xl font-bold text-light-500">
            Sign In
          </Typography>
          <Input
            className={'mb-6 text-light-100'}
            placeholder="Email"
            label={'Email'}
            errorMessage={''}
            {...register('email')}
          />
          <Input
            className={'mb-3  text-light-100'}
            placeholder="Password"
            label={'Password'}
            errorMessage={''}
            type={'password'}
            {...register('password')}
          />

          <FormCheckbox
            className={'mr-3 text-light-100 self-start'}
            label={'rememberMe'}
            control={control}
            name={'rememberMe'}
          />

          <Typography className=" mb-[66px] text-[14px] font-normal leading-[24px] tracking-normal text-center self-end text-light-100">
            Forgot Password?
          </Typography>
          <Button className="flex justify-center mb-[20px] w-full items-center">Sign In</Button>
          <Typography className=" mb-[66px] text-[14px] font-normal leading-[24px] tracking-normal text-center self-center text-light-900">
            Don't have an account?
          </Typography>
          <Typography as={Link} className={''} to={'/sign-up'} variant={'link1'}>
            Sign Up
          </Typography>
        </div>
      </form>
    </Card>
  )
}

export default SignIn
