'use client'

import { memo, useCallback, useState } from 'react'
import {
  Box,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import GroupIcon from '@mui/icons-material/Group'
import NotificationsIcon from '@mui/icons-material/Notifications'
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined'
import { PersonAdd, Settings, Logout } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import { useRouter } from 'next/navigation'

// Components
import Badge from '@components/Badge'
import Avatar from '@components/Avatar'
import SearchDialog from '@components/Search'
import MenuComposition from '@components/Menu'

// Constants
import { MOCK_CONTACTS, MOCK_NOTIFICATIONS } from '@constants/mockData'
import { LOCAL_STORAGE_KEY, ROUTE } from '@constants/index'

const Header = () => {
  const theme = useTheme()
  const route = useRouter()

  const [isOpenSearch, setIsOpenSearch] = useState(false)
  const [isOpenContacts, setIsOpenContacts] = useState(false)
  const [isOpenNotifications, setIsOpenNotifications] = useState(false)

  const HandleModalSearch = () => {
    if (isOpenSearch) {
      setIsOpenSearch(false)
    } else {
      setIsOpenSearch(true)
    }
  }

  const HandleMenuContacts = () => {
    if (isOpenContacts) {
      setIsOpenContacts(false)
    } else {
      setIsOpenContacts(true)
    }
  }

  const HandleMenuNotifications = () => {
    if (isOpenNotifications) {
      setIsOpenNotifications(false)
    } else {
      setIsOpenNotifications(true)
    }
  }

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.USER_ID)
    route.push(ROUTE.LOGIN)
  }, [route])

  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="flex-end"
        gap={2}
        boxShadow="rgb(100 116 139 / 12%) 0px 1px 4px"
      >
        <Tooltip
          title="Search"
          sx={{
            fontSize: '8px',
            paddingTop: '4px',
          }}
          onClick={HandleModalSearch}
        >
          <IconButton size="small" edge="start" color="inherit">
            <SearchIcon sx={{ width: '20px', height: '20px' }} />
          </IconButton>
        </Tooltip>

        <MenuComposition
          element={
            <Tooltip
              title="Contacts"
              sx={{
                fontSize: '8px',
                paddingTop: '4px',
              }}
              onClick={HandleMenuContacts}
            >
              <GroupIcon sx={{ width: '20px', height: '20px' }} />
            </Tooltip>
          }
          open={false}
        >
          <Box padding="24px" width="380px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="10px"
            >
              <Typography fontWeight={600}>Contacts</Typography>
            </Box>
            {MOCK_CONTACTS.map((item) => (
              <Box
                marginTop="10px"
                display="flex"
                alignItems="center"
                key={item.id}
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Avatar alt={item.alt} src={item.img} type="normal" />
                  <Typography marginLeft="15px">{item.name}</Typography>
                </Box>
                {item.online ? (
                  <Badge
                    color="primary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                    content={0}
                  />
                ) : (
                  <Typography>{item.active} ago</Typography>
                )}
              </Box>
            ))}
          </Box>
        </MenuComposition>

        <MenuComposition
          element={
            <Tooltip
              title="Notifications"
              sx={{
                fontSize: '8px',
                paddingTop: '4px',
              }}
              onClick={HandleMenuNotifications}
            >
              <Badge content={4} color="error" invisible={false}>
                <NotificationsIcon color="action" />
              </Badge>
            </Tooltip>
          }
          open={false}
        >
          <Box padding="24px" width="380px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight={600}>Notifications</Typography>
              <IconButton>
                <DraftsOutlinedIcon fontSize="small" />
              </IconButton>
            </Box>
            {MOCK_NOTIFICATIONS.map((item) => (
              <Box
                marginTop="10px"
                display="flex"
                alignItems="start"
                key={item.id}
              >
                <Avatar alt={item.alt} src={item.img} type="normal" />
                <Box marginLeft="15px">
                  <Typography fontWeight={600} fontSize="14px">
                    {item.content}
                    <Link color={theme.palette.secondary.main} marginLeft="3px">
                      {item.link}
                    </Link>
                  </Typography>
                  <Typography
                    fontSize="12px"
                    color={theme.palette.grey[500]}
                    marginTop="5px"
                  >
                    {item.time}
                  </Typography>
                </Box>
                <IconButton>
                  <CloseIcon fontSize="small" />
                </IconButton>
                <Divider />
              </Box>
            ))}
          </Box>
        </MenuComposition>

        <MenuComposition
          element={
            <Avatar
              type="normal"
              alt="avatar"
              sx={{ width: '20px', height: '20px' }}
            />
          }
          open={false}
        >
          <MenuItem
            sx={{
              gap: '15px',
            }}
          >
            <Avatar type="normal" sx={{ width: '20px', height: '20px' }} />
            <Typography fontSize={14}>Profile</Typography>
          </MenuItem>
          <MenuItem
            sx={{
              gap: '15px',
            }}
          >
            <Avatar type="normal" sx={{ width: '20px', height: '20px' }} />
            <Typography fontSize={14}>My account</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </MenuComposition>
      </Box>

      {/* Modal Search */}
      <SearchDialog isOpen={isOpenSearch} onClose={HandleModalSearch} />
    </>
  )
}

export default memo(Header)
