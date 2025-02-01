import { ComponentPropsWithoutRef } from 'react'
import { Control, useController, FieldValues, FieldPath } from 'react-hook-form'
import { Checkbox } from '../checkbox/checkbox.tsx'

type Props<T extends FieldValues> = ComponentPropsWithoutRef<typeof Checkbox> & {
  control: Control<T>
  name: FieldPath<T>
}

export const FormCheckbox = <T extends FieldValues>({
  control,
  name,
  errorMessage,
  ...props
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <Checkbox
      className={'border text-white border-light-100'}
      {...props}
      onCheckedChange={onChange}
      checked={value}
      errorMessage={errorMessage ?? error?.message}
      {...field}
    />
  )
}
