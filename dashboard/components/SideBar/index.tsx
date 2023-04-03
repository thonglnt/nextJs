import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Typography,
  useTheme,
} from '@mui/material'
import { memo, useState } from 'react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

// Components
import CardHeader from '@components/CardHeader'
import Logo from '@components/Logo'
import Button from '@components/Button'

// Constants
import { dashboardIcon } from '@constants/mockIcon'
import Link from 'next/link'

interface SubMenuSidebar {
  id: string
  title: string
  slug: string
}

interface MenuSidebar {
  id: string
  icon: string
  title: string
  slug: string
  subMenu: SubMenuSidebar[]
}

export interface ISidebar {
  id: string
  title: string
  menu: MenuSidebar[]
}

export interface ISidebarProps {
  menuSidebar: ISidebar[]
}

const SideBar = ({ menuSidebar }: ISidebarProps) => {
  const theme = useTheme()
  const [isToggle, setIsToggle] = useState<MenuSidebar>()
  const [isActive, setIsActive] = useState<MenuSidebar | SubMenuSidebar>()

  const handleToggle = (menuItem: MenuSidebar) => {
    if (isToggle?.id === menuItem.id) {
      setIsToggle(undefined)
    } else {
      setIsToggle(menuItem)
    }
  }

  const handleActive = (item: MenuSidebar | SubMenuSidebar) => {
    setIsActive(item)
  }

  const renderMenuItem = (menuItem: MenuSidebar) => {
    return (
      <Link href={menuItem.slug} prefetch={false}>
        <MenuItem
          key={menuItem.id}
          sx={{
            width: '100%',
            padding: '12px 22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ':hover': {
              background: theme.palette.grey[900],
            },
            borderRadius: '8px',
            background: `${
              isActive?.id === menuItem.id
                ? theme.palette.grey[900]
                : 'transparent'
            }`,
          }}
          onClick={() => handleActive(menuItem)}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              sx={{
                width: '16px',
                height: '16px',
                color: `${
                  isActive?.id === menuItem.id
                    ? theme.palette.secondary.dark
                    : theme.palette.common.white
                }`,
              }}
            >
              {dashboardIcon[menuItem.icon]}
            </IconButton>
            <Typography
              fontSize="14px"
              lineHeight="24px"
              fontWeight={600}
              textTransform="capitalize"
              marginLeft="10px"
              color={
                isActive?.id === menuItem.id
                  ? theme.palette.secondary.dark
                  : theme.palette.common.white
              }
            >
              {menuItem.title}
            </Typography>
          </Box>
        </MenuItem>
      </Link>
    )
  }

  const renderCollapseMenuItem = (menuItem: MenuSidebar) => (
    <>
      <MenuItem
        key={menuItem.id}
        sx={{
          width: '100%',
          padding: '12px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          ':hover': {
            background: theme.palette.grey[900],
          },
          borderRadius: '8px',
        }}
        onClick={() => handleToggle(menuItem)}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton
            sx={{
              width: '16px',
              height: '16px',
              color: `${theme.palette.common.white}`,
            }}
          >
            {dashboardIcon[menuItem.icon]}
          </IconButton>
          <Typography
            fontSize="14px"
            lineHeight="24px"
            fontWeight={600}
            textTransform="capitalize"
            marginLeft="10px"
            color={theme.palette.common.white}
          >
            {menuItem.title}
          </Typography>
        </Box>
        <IconButton
          sx={{
            padding: 0,
          }}
        >
          {isToggle?.id === menuItem.id ? (
            <KeyboardArrowDownIcon
              sx={{
                color: theme.palette.grey[500],
              }}
            />
          ) : (
            <KeyboardArrowRightIcon
              sx={{
                color: theme.palette.grey[500],
              }}
            />
          )}
        </IconButton>
      </MenuItem>

      {isToggle?.id === menuItem.id && (
        <MenuList
          sx={{
            padding: '0px 10px',
          }}
        >
          {menuItem.subMenu.map((item: SubMenuSidebar) => (
            <Link href={item.slug} prefetch={false}>
              <MenuItem
                key={item.id}
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  ':hover': {
                    background: theme.palette.grey[900],
                  },
                  borderRadius: '8px',
                  background: `${
                    isActive?.id === item.id
                      ? theme.palette.grey[900]
                      : 'transparent'
                  }`,
                  padding: '0px 10px',
                  marginTop: '5px',
                }}
                onClick={() => handleActive(item)}
              >
                <Typography
                  fontSize="14px"
                  lineHeight="40px"
                  fontWeight={600}
                  textTransform="capitalize"
                  marginLeft="10px"
                  color={
                    isActive?.id === item.id
                      ? theme.palette.secondary.dark
                      : theme.palette.common.white
                  }
                >
                  {item.title}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      )}
    </>
  )

  return (
    <Box
      width="280px"
      padding="22px 16px"
      bgcolor={theme.palette.common.black}
      color={theme.palette.common.white}
      display="flex"
      flexDirection="column"
      gap="24px"
    >
      <Box paddingTop="8px" paddingLeft="10px">
        <Logo />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        padding="11px 24px"
        bgcolor={theme.palette.grey[900]}
        borderRadius={2}
      >
        <CardHeader title="AcmeInc" desc="Your tier: Premium" />
        <IconButton>
          <UnfoldMoreIcon
            sx={{
              color: theme.palette.common.white,
            }}
          />
        </IconButton>
      </Box>
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          background: theme.palette.grey[800],
        }}
      />

      {/* Menu Sidebar */}
      {menuSidebar.map((item) => (
        <Box key={item.id}>
          <Typography
            variant="h3"
            textTransform="uppercase"
            fontSize="14px"
            lineHeight="30px"
            letterSpacing="0.5px"
            fontWeight={700}
            color={theme.palette.grey[600]}
          >
            {item.title}
          </Typography>

          <Box marginTop="4px" display="flex" flexDirection="column">
            {item.menu.map((menuItem) => {
              return menuItem.subMenu.length > 0 ? (
                <Box key={menuItem.id}>{renderCollapseMenuItem(menuItem)}</Box>
              ) : (
                <Box key={menuItem.id}>{renderMenuItem(menuItem)}</Box>
              )
            })}
          </Box>
        </Box>
      ))}
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          background: theme.palette.grey[800],
        }}
      />
      <CardHeader title="Need help?" desc="check our docs" />
      <Button variant="contained" color="success">
        Documentation
      </Button>
    </Box>
  )
}

export default memo(SideBar)
