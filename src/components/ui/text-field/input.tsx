'use client'

import * as React from 'react'

import {
  type ChangeEventHandler,
  type ComponentPropsWithoutRef,
  type RefObject,
  useRef,
  useState,
} from 'react'
import { cn } from '../../../lib/utils.ts'
import { Typography } from '../typography'
import { Icon } from '../icon/Icon.tsx'
import { SearchIcon } from '../../../assets/icons/search.tsx'
import { useGenerateId } from '../../../lib/useGenerateId.ts'

export type InputProps = {
  errorMessage?: string
  label?: string
  value?: string
  type?: string
  clear?: (e: any) => void
} & ComponentPropsWithoutRef<'input'>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, onChange, clear, errorMessage, name, id, value, label, type, ...props },

    ref
  ) => {
    const isTypeSearch = type === 'search'
    const isTypePassword = type === 'password'
    const innerRef = useRef<HTMLInputElement>(null)
    const r = (ref as RefObject<HTMLInputElement>) ?? innerRef

    const [isViewPassword, setIsViewPassword] = useState(false)

    const switchView = () => {
      r?.current?.focus()
      setIsViewPassword(prevState => !prevState)
    }
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
      onChange?.(event)
    }

    const onClearHandler = (e: any) => {
      r?.current?.focus()
      clear?.(e)
    }

    const inputId = useGenerateId(name, id)

    return (
      <div className="w-full  relative  ">
        {label && (
          <label htmlFor={inputId} className=" w-full block text-xs font-medium text-light-900">
            {' '}
            <Typography className={''}>{label}</Typography>
          </label>
        )}
        <input
          id={inputId}
          onChange={onChangeHandler}
          type={isViewPassword && isTypePassword ? 'text' : type}
          name={name}
          className={cn(
            'bg-inherit flex h-9 w-full  rounded-md border py-1.5 px-3 border-dark-100 text-light-900 ',
            className,
            errorMessage && 'border-danger-500'
          )}
          ref={r}
          {...props}
        />
        <div className="flex items-center h-full absolute top-0 left-3">
          {isTypeSearch && <SearchIcon />}
        </div>

        <div className="absolute top-2 right-3 flex h-full justify-center items-center ">
          {' '}
          <Icon
            clear={onClearHandler}
            isTypePassword={isTypePassword}
            isTypeSearch={isTypeSearch}
            isViewPassword={isViewPassword}
            switchView={switchView}
            value={value}
          />
        </div>

        {errorMessage && <Typography className={cn('text-danger-500 ')}>{errorMessage}</Typography>}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
