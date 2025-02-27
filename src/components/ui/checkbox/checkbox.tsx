'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { ReactNode } from 'react'
import { cn } from '../../../lib/utils.ts'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label?: ReactNode
    errorMessage?: string
  }
>(({ className, label, errorMessage, ...props }, ref) => (
  <>
    <label className=" self-start  text-light-100">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          ' text-light-100 peer h-4 w-4 shrink-0 rounded-sm border border-light-100  ',
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            'flex items-center border border-light-100 text-light-100 justify-center text-current'
          )}
        >
          <Check className="h-4 border border-light-100 text-light-100 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label}
    </label>
    {errorMessage && <p className={'text-red-500 text-sm'}>{errorMessage}</p>}
  </>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
