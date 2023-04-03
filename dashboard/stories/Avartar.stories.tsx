import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import Avatars, { IAvatar } from '@components/Avatar'

export default {
  title: 'Component/Avatar',
  component: Avatars,
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
} as ComponentMeta<typeof Avatars>

const Template: ComponentStory<typeof Avatars> = (args) => <Avatars {...args} />

export const AvatarNormalComponent = Template.bind({})
const avatarNormalComponent: IAvatar = {
  type: 'normal',
}
AvatarNormalComponent.args = avatarNormalComponent

export const AvatarLetterComponent = Template.bind({})
const avatarLetterComponent: IAvatar = {
  type: 'letter',
}
AvatarLetterComponent.args = avatarLetterComponent

export const AvatarBadgeComponent = Template.bind({})
const avatarBadgeComponent: IAvatar = {
  type: 'badge',
  status: 'on',
}
AvatarBadgeComponent.args = avatarBadgeComponent
