'use client'

import { Typography, TypographyProps, useTheme } from '@mui/material'
import Link from 'next/link'
import { memo, ReactNode } from 'react'

export interface ILogo extends TypographyProps {
  children: ReactNode | string
  link: string
}
const Logo = ({ children = 'Logo', link = '/', ...props }: ILogo) => {
  const theme = useTheme()

  return (
    <Typography
      variant="h1"
      color={theme.palette.common.black}
      fontSize="30px"
      fontWeight={400}
      textTransform="uppercase"
      {...props}
    >
      <Link href={link}>{children}</Link>
    </Typography>
  )
}

export default memo(Logo)
