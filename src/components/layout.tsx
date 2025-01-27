import { ReactNode } from 'react'

import Header, { HeaderProps } from './layout/header/header.tsx'
import { useAccountMe } from '../services/auth/auth-hooks.ts'

export type LayoutPrimitiveProps = { children: ReactNode } & HeaderProps

export const LayoutPrimitive = () => {
  const { data, isError, isLoading } = useAccountMe()
  const isAuthenticated = !isError && !isLoading
  return (
    <div className={'w-full flex  '}>
      <Header
        avatar={data?.avatar ?? null}
        email={data?.email ?? ''}
        isLoggedIn={isAuthenticated}
        // onLogout={onLogout}
        userName={data?.name ?? ''}
      />
    </div>
  )
}
