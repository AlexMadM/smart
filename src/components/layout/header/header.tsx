import { Logo } from '../../../assets/icons'
import { Link } from 'react-router-dom'
import { UserDropdown } from './user-dropdown/user-dropdown.tsx'

export type UserDropdownProps = {
  avatar: null | string
  email: string
  onLogout: () => void
  userName: string
}
export type HeaderProps =
  | ({
      isLoggedIn: false
    } & Partial<UserDropdownProps>)
  | ({
      isLoggedIn: true
    } & UserDropdownProps)

const Header = ({ avatar, email, isLoggedIn, onLogout, userName }: HeaderProps) => {
  return (
    <div className="header flex mb-9 justify-between items-center w-full h-[60px] bg-dark-700 ">
      {' '}
      <Link to={'/'}>
        <Logo />
      </Link>
      {isLoggedIn && (
        <UserDropdown avatar={avatar} email={email} onLogout={onLogout} userName={userName} />
      )}
      {!isLoggedIn && <Link to={'/login'}>Sign In</Link>}
    </div>
  )
}

export default Header
