import { Logo } from '../../../assets/icons'
import { Link } from 'react-router-dom'
import { UserDropdown, UserDropdownProps } from './user-dropdown/user-dropdown.tsx'

export type HeaderProps =
  | ({
      isLoggedIn: false
    } & Partial<UserDropdownProps>)
  | ({
      isLoggedIn: true
    } & UserDropdownProps)
const Header = ({ avatar, email, isLoggedIn, onLogout, userName }: HeaderProps) => {
  return (
    <header className={'w-full bg-dark-700 '}>
      <div className={'ml-[60px] mr-[60px] text-white items-center h-[60px] flex justify-between '}>
        <Link to={'/'}>
          <Logo />
        </Link>
        {isLoggedIn && (
          <UserDropdown avatar={avatar} email={email} onLogout={onLogout} userName={userName} />
        )}
        {!isLoggedIn && (
          <Link to={'/login'}>
            <p className={'text-light-100 '}>Sign In</p>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
