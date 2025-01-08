import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...restProps }, ref) => {
  const classNames = {
    root: clsx(className),
  }

  return <div className={classNames.root} ref={ref} {...restProps}></div>
})
