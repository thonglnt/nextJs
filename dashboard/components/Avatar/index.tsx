'use client'

import { Avatar, AvatarProps } from '@mui/material'
import { memo } from 'react'

// Utils
import { stringAvatar } from '@utils/index'

// Styled
import { StyledBadge } from './AvatarStyled'

export interface IAvatar extends AvatarProps {
  type: 'normal' | 'badge' | 'letter'
  status?: 'on' | 'off'
}

const Avatars = ({ type, alt, src, status = 'off', ...props }: IAvatar) => {
  return (
    <>
      {type === 'badge' ? (
        <StyledBadge
          status={status}
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt={alt} src={src} {...props} />
        </StyledBadge>
      ) : type === 'letter' ? (
        <Avatar {...stringAvatar('Kent Dodds')} {...props} />
      ) : (
        <Avatar alt={alt} src={src} {...props} />
      )}
    </>
  )
}

export default memo(Avatars)
