import { Typography, TypographyProps, useTheme } from '@mui/material'
import Link from 'next/link'
import { memo } from 'react'

export interface ICardActions extends TypographyProps {
  title: string
  href: string
}
const CardActions = ({ title, href, ...props }: ICardActions) => {
  const theme = useTheme()

  return (
    <Typography
      color={theme.palette.secondary.main}
      fontSize="13px"
      lineHeight="22px"
      {...props}
    >
      <Link href={href} prefetch={false}>
        {title}
      </Link>
    </Typography>
  )
}

export default memo(CardActions)
