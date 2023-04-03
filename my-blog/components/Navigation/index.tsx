'use client'

import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  SvgIcon,
  useTheme,
} from '@mui/material'
import Link from 'next/link'
import { lazy, Suspense, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'

// Components
import Button from '@components/Button'

const Search = lazy(() => import('@components/Search'))

type TNavItem = {
  id: number
  name: string
  path: string
}

export interface INavigation {
  navItems: TNavItem[]
}

const Navigation = ({ navItems }: INavigation) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenNavigate, setIsOpenNavigate] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleGetValue = () => {
    // console.log(123)
  }

  const handleKeyDown = () => {
    // console.log(123)
  }

  const handleOpenNavigate = () => {
    if (isOpenNavigate) {
      setIsOpenNavigate(false)
    } else {
      setIsOpenNavigate(true)
    }
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        padding="12px 12px 12px 25px"
        width="100%"
        alignItems="center"
        boxShadow={`${theme.palette.grey[400]} 0px 3px 8px`}
        bgcolor={theme.palette.common.white}
      >
        {/* List Desktop */}
        <List
          sx={{
            display: {
              md: 'flex',
              xs: 'none',
            },
            gap: '30px',
          }}
        >
          {navItems.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                padding: 0,
                fontSize: '18px',
                textTransform: 'uppercase',
                fontWeight: 600,
                letterSpacing: '2px',
                width: 'auto',
                ':hover': {
                  color: theme.palette.grey[500],
                },
              }}
            >
              <Link href={item.path} prefetch={false}>
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>

        {/* List mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: {
              md: 'none',
              xs: 'block',
            },
          }}
          onClick={handleOpenNavigate}
        >
          <MenuIcon />
        </IconButton>

        {/* Search Button */}
        <Button
          onClick={handleOpen}
          variant="text"
          aria-label="search"
          sx={{
            backgroundColor: 'transparent',
            ':hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <SvgIcon
            sx={{
              color: theme.palette.common.black,
              width: 24,
              height: 24,
              cursor: 'pointer',
              ':hover': {
                color: theme.palette.grey[500],
              },
            }}
          >
            <SearchIcon />
          </SvgIcon>
        </Button>
      </Box>

      {/* Modal Search */}
      <Suspense fallback={<div>loading.....</div>}>
        <Search
          isOpen={isOpen}
          onClose={handleClose}
          onChange={handleGetValue}
          onKeyDown={handleKeyDown}
        />
      </Suspense>

      {/* Modal Navigate */}
      {isOpenNavigate && (
        <Container
          sx={{
            position: 'relative',
          }}
        >
          <Box
            width="100%"
            sx={{
              display: {
                md: 'none',
                xs: 'block',
              },
              zIndex: 2,
            }}
            bgcolor={theme.palette.grey[800]}
            position="absolute"
            right="0"
          >
            <List
              sx={{
                gap: '12px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {navItems.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    padding: 0,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    width: 'auto',
                    ':hover': {
                      bgcolor: theme.palette.grey[500],
                    },
                    color: theme.palette.common.white,
                  }}
                >
                  <Link
                    href={item.path}
                    prefetch={false}
                    style={{
                      width: '100%',
                      padding: '15px 25px',
                    }}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      )}
    </>
  )
}

export default Navigation
