import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Types
import theme from '@self-types/Themes.types'

// Components
import TransitionAlerts, { IAlert } from '@components/Alert'

export default {
  title: 'Component/Alert',
  component: TransitionAlerts,
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
} as ComponentMeta<typeof TransitionAlerts>

const Template: ComponentStory<typeof TransitionAlerts> = (args) => (
  <TransitionAlerts {...args} />
)

export const ErrorAlertComponent = Template.bind({})
const errorAlertComponent: IAlert = {
  children: 'This is an error alert — check it out!',
  isOpen: true,
  severity: 'error',
}
ErrorAlertComponent.args = errorAlertComponent

export const WarningAlertComponent = Template.bind({})
const warningAlertComponent: IAlert = {
  children: 'This is an warning alert — check it out!',
  isOpen: true,
  severity: 'warning',
}
WarningAlertComponent.args = warningAlertComponent

export const InfoAlertComponent = Template.bind({})
const infoAlertComponent: IAlert = {
  children: 'This is an info alert — check it out!',
  isOpen: true,
  severity: 'info',
}
InfoAlertComponent.args = infoAlertComponent

export const SuccessAlertComponent = Template.bind({})
const successAlertComponent: IAlert = {
  children: 'This is an success alert — check it out!',
  isOpen: true,
  severity: 'success',
}
SuccessAlertComponent.args = successAlertComponent

export const ErrorAlertTitle = Template.bind({})
const errorAlertTitle: IAlert = {
  children: 'This is an error alert — check it out!',
  isOpen: true,
  severity: 'error',
  alertTitle: 'Error',
}
ErrorAlertTitle.args = errorAlertTitle

export const WarningAlertTitle = Template.bind({})
const warningAlertTitle: IAlert = {
  children: 'This is an warning alert — check it out!',
  isOpen: true,
  severity: 'warning',
  alertTitle: 'Warning',
}
WarningAlertTitle.args = warningAlertTitle

export const InfoAlertTitle = Template.bind({})
const infoAlertTitle: IAlert = {
  children: 'This is an info alert — check it out!',
  isOpen: true,
  severity: 'info',
  alertTitle: 'Info',
}
InfoAlertTitle.args = infoAlertTitle

export const SuccessAlertTitle = Template.bind({})
const successAlertTitle: IAlert = {
  children: 'This is an success alert — check it out!',
  isOpen: true,
  severity: 'success',
  alertTitle: 'Success',
}
SuccessAlertTitle.args = successAlertTitle
