import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MailIcon from '@mui/icons-material/Mail'

// Types
import theme from '@self-types/Themes.types'

// Components
import BadgeVisibility, { IBadge } from '@components/Badge'

export default {
  title: 'Component/Badge',
  component: BadgeVisibility,
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
} as ComponentMeta<typeof BadgeVisibility>

const Template: ComponentStory<typeof BadgeVisibility> = (args) => (
  <BadgeVisibility {...args} />
)

export const BadgeComponent = Template.bind({})
const badgeComponent: IBadge = {
  children: <MailIcon color="action" />,
  content: 9,
  color: 'error',
  invisible: false,
}
BadgeComponent.args = badgeComponent
