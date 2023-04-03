import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import CardHeader, { ICardHeader } from '@components/CardHeader'

export default {
  title: 'Component/CardHeader',
  component: CardHeader,
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
} as ComponentMeta<typeof CardHeader>

const Template: ComponentStory<typeof CardHeader> = (args) => (
  <CardHeader {...args} />
)

export const CardHeaderComponent = Template.bind({})
const cardHeaderComponent: ICardHeader = {
  title: 'Learn more',
}
CardHeaderComponent.args = cardHeaderComponent

export const CardHeaderActionsComponent = Template.bind({})
const cardHeaderActionsComponent: ICardHeader = {
  title: 'Learn more',
  actions: true,
}
CardHeaderActionsComponent.args = cardHeaderActionsComponent

export const CardHeaderDescComponent = Template.bind({})
const cardHeaderDescComponent: ICardHeader = {
  title: 'Learn more',
  desc: 'Description',
}
CardHeaderDescComponent.args = cardHeaderDescComponent
