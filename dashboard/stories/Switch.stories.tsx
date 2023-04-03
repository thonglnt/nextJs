import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import SwitchLabels, { ISwitchLabels } from '@components/Switch'

export default {
  title: 'Component/Switch',
  component: SwitchLabels,
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
} as ComponentMeta<typeof SwitchLabels>

const Template: ComponentStory<typeof SwitchLabels> = (args) => (
  <SwitchLabels {...args} />
)

export const SwitchComponent = Template.bind({})
const switchComponent: ISwitchLabels = {}
SwitchComponent.args = switchComponent

export const SwitchLabelComponent = Template.bind({})
const switchLabelComponent: ISwitchLabels = {
  label: 'Switch',
}
SwitchLabelComponent.args = switchLabelComponent

export const SwitchAutoActiveComponent = Template.bind({})
const switchAutoActiveComponent: ISwitchLabels = {
  label: 'Switch',
  defaultChecked: true,
}
SwitchAutoActiveComponent.args = switchAutoActiveComponent
