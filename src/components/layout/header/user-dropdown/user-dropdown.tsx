import { Link } from 'react-router-dom'

import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Typography,
} from '../../../ui'

import PersonOutline from '../../../../assets/icons/components/PersonOutline.tsx'

export type UserDropdownProps = {
  avatar: null | string
  email: string
  onLogout: () => void
  userName: string
}

export const UserDropdown = ({ avatar, email, onLogout, userName }: UserDropdownProps) => {
  if (!avatar) {
    avatar = `https://ui-avatars.com/api/?name=${userName.split(' ').join('+')}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={''}>
          <Typography className={''} variant={'subtitle1'}>
            {userName}
          </Typography>
          <Avatar src={avatar} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Avatar src={avatar} />
          <div>
            <Typography variant={'subtitle2'}>{userName}</Typography>
            <Typography className={''} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to={'/profile'}>
            <PersonOutline />
            My profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onLogout}>
          {/*<Logout />*/}
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
