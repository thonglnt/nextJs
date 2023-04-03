import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Divider, ListItemIcon, MenuItem } from '@mui/material'
import { PersonAdd, Settings, Logout } from '@mui/icons-material'

// Types
import theme from '@self-types/Themes.types'

// Components
import MenuComposition, { IMenuComposition } from '@components/Menu'
import Avatar from '@components/Avatar'

export default {
  title: 'Component/Menu',
  component: MenuComposition,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof MenuComposition>

const Template: ComponentStory<typeof MenuComposition> = (args) => (
  <Box display="flex" marginLeft={40}>
    <MenuComposition {...args} />
  </Box>
)

export const MenuCompositionComponent = Template.bind({})
const menuCompositionComponent: IMenuComposition = {
  horizontal: 'center',
  element: <Avatar type="letter">M</Avatar>,
  open: false,
  children: (
    <>
      <MenuItem>
        <Avatar type="normal" /> Profile
      </MenuItem>
      <MenuItem>
        <Avatar type="normal" /> My account
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
      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  ),
}
MenuCompositionComponent.args = menuCompositionComponent
