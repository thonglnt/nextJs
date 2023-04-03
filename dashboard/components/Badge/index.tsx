'use client'

import { memo, ReactNode } from 'react'

import { Badge, BadgeProps } from '@mui/material'

export interface IBadge extends BadgeProps {
  children?: ReactNode | string
  content: number
}
const BadgeVisibility = ({
  children,
  content,
  invisible = false,
  ...props
}: IBadge) => {
  return (
    <Badge
      overlap="circular"
      badgeContent={content}
      invisible={invisible}
      {...props}
    >
      {children}
    </Badge>
  )
}

export default memo(BadgeVisibility)
