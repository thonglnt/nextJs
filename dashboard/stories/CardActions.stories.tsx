import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import CardActions, { ICardActions } from '@components/CardActions'

export default {
  title: 'Component/CardActions',
  component: CardActions,
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
} as ComponentMeta<typeof CardActions>

const Template: ComponentStory<typeof CardActions> = (args) => (
  <CardActions {...args} />
)

export const CardActionsComponent = Template.bind({})
const cardActionsComponent: ICardActions = {
  title: 'Learn more',
  href: '/learn-more',
}
CardActionsComponent.args = cardActionsComponent
