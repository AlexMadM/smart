import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button, Card, Typography } from '../../ui'
import { Input } from '../../ui/text-field/input.tsx'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
const schema = z
  .object({
    email: z.string().email('Invalid email').nonempty('Enter email'),
    password: z.string().nonempty('Enter password'),
    passwordConfirmation: z.string().nonempty('Confirm your password'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['passwordConfirmation'],
      })
    }

    return data
  })

type FormType = z.infer<typeof schema>

type Props = {
  onSubmit?: (data: FormType) => void
}

export const SignUp = (props: Props) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })
  const handleFormSubmitted = handleSubmit(data => props.onSubmit(data))

  return (
    <>
      <Card
        className={'bg-dark-700 rounded-sm w-[420px] flex flex-col items-center justify-center'}
      >
        <Typography
          className={
            'text-[26px] font-bold leading-[36px] tracking-normal text-left text-light-100 mb-[27px]'
          }
          variant={'large'}
        >
          Sign Up
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <div className={'w-[350px] mb-[60px] flex flex-col items-center gap-6 self-center '}>
            <Input
              className={''}
              placeholder="Email"
              label={'Email'}
              errorMessage={errors.email?.message}
              {...register('email')}
            />{' '}
            <Input
              errorMessage={errors.email?.message}
              {...register('email')}
              label={'Password'}
              name={'password'}
              placeholder={'Password'}
              type={'password'}
            />{' '}
            <Input
              errorMessage={errors.email?.message}
              {...register('email')}
              label={'Confirm password'}
              name={'passwordConfirmation'}
              placeholder={'Confirm password'}
              type={'password'}
            />
          </div>
          <Button className={'flex justify-center mb-[20px] w-full items-center'} type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography
          className={'mb-5 text-sm font-normal leading-6 text-light-900'}
          variant={'body2'}
        >
          Already have an account?
        </Typography>
        <Typography as={Link} className={''} to={'/sign-in'} variant={'link1'}>
          Sign In
        </Typography>
      </Card>
    </>
  )
}
