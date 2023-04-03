'use client'

import { memo } from 'react'
import {
  Box,
  BoxProps,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material'
import Link from 'next/link'

export interface IWidgetsItem {
  name: string
  slug: string
}

export interface IWidget extends BoxProps {
  title: string
  widgetsItem: IWidgetsItem[]
}
const Widget = ({ title = 'Title', widgetsItem, ...props }: IWidget) => {
  const theme = useTheme()

  return (
    <Box
      component="aside"
      sx={{
        border: `1px solid ${theme.palette.grey[400]}`,
        padding: '25px',
        marginBottom: '50px',
        position: 'relative',
        width: '100%',
      }}
      {...props}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '25px',
          position: 'absolute',
          textTransform: 'capitalize',
          fontWeight: 600,
          top: '-17px',
          background: theme.palette.common.white,
          marginLeft: '-26px',
          display: 'inline-block',
          paddingRight: '30px',
        }}
      >
        {title}
      </Typography>
      <List>
        {widgetsItem.map((item) => (
          <ListItem
            key={item.slug}
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              ':hover': {
                color: theme.palette.grey[500],
              },
            }}
          >
            <Link href={`/${item.slug}`} prefetch={false}>
              {item.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default memo(Widget)
