import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'



export interface TextProps<T extends ElementType> {
  as?: T
  children?: ReactNode
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'error'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
}

export function Typography<T extends ElementType = 'p'>({
  as,
  className,
  variant = 'body1',
  ...restProps
}: Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>> & TextProps<T>) {
  const Component = as || 'p'

  return <Component className={className} {...restProps} />
}
