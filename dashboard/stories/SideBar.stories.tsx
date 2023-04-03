import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import SideBar, { ISidebar, ISidebarProps } from '@components/SideBar'
import { MOCK_SIDEBAR } from '@constants/mockData'

export default {
  title: 'Component/SideBar',
  component: SideBar,
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
} as ComponentMeta<typeof SideBar>

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />

export const SideBarComponent = Template.bind({})
const sideBarComponent: ISidebarProps = {
  menuSidebar: MOCK_SIDEBAR as ISidebar[],
}
SideBarComponent.args = sideBarComponent
