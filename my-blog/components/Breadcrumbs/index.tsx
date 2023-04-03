'use client'

import {
  Breadcrumbs,
  BreadcrumbsProps,
  Typography,
  useTheme,
} from '@mui/material'
import Link from 'next/link'

export interface LinkItem {
  link: string
  href: string
}

export interface IBreadcrumbs extends BreadcrumbsProps {
  links: LinkItem[]
}
const BasicBreadcrumbs = ({ links = [], ...props }: IBreadcrumbs) => {
  const theme = useTheme()

  return (
    <Breadcrumbs {...props}>
      <Typography color={theme.palette.common.black}>
        <Link href="/">HOME</Link>
      </Typography>

      {links.map((item) => (
        <Typography
          key={item.link}
          textTransform="uppercase"
          color={theme.palette.common.black}
        >
          <Link href={item.href as string}>{item.link}</Link>
        </Typography>
      ))}
    </Breadcrumbs>
  )
}

export default BasicBreadcrumbs
