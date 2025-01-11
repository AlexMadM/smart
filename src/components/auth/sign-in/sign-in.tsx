import { Button, Card, Typography } from '../../ui'
import { Input } from '../../ui/text-field/input.tsx'
import { FormCheckbox } from '../../ui/form/form-checkbox.tsx'
import { z } from 'zod'
const SignIn = () => {
  const loginSchema = z.object({
    email: z.string().min(1, 'Required').email('Неверный адрес электронной почты'),
    password: z
      .string({ required_error: 'Required' })
      .min(1, 'Required')
      .min(3, 'Минимум 3 символа'),
  })

  type LoginFields = z.infer<typeof loginSchema>

  return (
    <Card className="bg-dark-700 rounded-sm w-[420px] flex items-center justify-center">
      <div className="w-[350px] flex flex-col items-center self-center ">
        <Typography className="text-center mb-6 mt-8 text-2xl font-bold text-light-500">
          Sign In
        </Typography>
        <Input className={'mb-6'} label="Email" type="email" placeholder="Enter your email" />
        <Input
          className={'mb-3'}
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <FormCheckbox />
        <Typography className=" mb-[66px] text-[14px] font-normal leading-[24px] tracking-normal text-center self-end text-light-100">
          Forgot Password?
        </Typography>
        <Button className="flex justify-center mb-[20px] w-full items-center">Sign In</Button>
        <Typography className=" mb-[66px] text-[14px] font-normal leading-[24px] tracking-normal text-center self-center text-light-900">
          Don't have an account?
        </Typography>
      </div>
    </Card>
  )
}

export default SignIn
