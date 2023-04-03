'use client'

import { memo } from 'react'
import {
  Breadcrumbs,
  BreadcrumbsProps,
  Typography,
  useTheme,
} from '@mui/material'
import Link from 'next/link'

export interface IBreadcrumbs extends BreadcrumbsProps {
  title: string
}
const BasicBreadcrumbs = ({ title, ...props }: IBreadcrumbs) => {
  const theme = useTheme()

  return (
    <Breadcrumbs {...props}>
      <Typography color={theme.palette.secondary.main}>
        <Link href="/" prefetch={false}>
          Dashboard
        </Link>
      </Typography>
      <Typography color={theme.palette.secondary.main}>
        <Link href="/" prefetch={false}>
          Management
        </Link>
      </Typography>
      <Typography textTransform="capitalize" color={theme.palette.grey.A700}>
        {title}
      </Typography>
    </Breadcrumbs>
  )
}

export default memo(BasicBreadcrumbs)
